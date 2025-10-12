const fetch = require('node-fetch');
// 1. ADD THE MONGODB DRIVER IMPORT
const { MongoClient } = require('mongodb'); 

// 2. CONNECTION CACHING (Crucial for Netlify Serverless Functions)
// The URI will be read from the MONGO_URI environment variable (set in Netlify UI)
const uri = process.env.MONGO_URI; 
// The MongoDB client is initialized once globally.
const client = new MongoClient(uri, { 
    // Recommended options for serverless environments
    serverSelectionTimeoutMS: 5000, 
    maxPoolSize: 1 
}); 
let cachedDb = null;

// Function to connect to the database (and reuse the connection if it exists)
async function connectToDatabase() {
    if (cachedDb) {
        console.log('Using cached database connection.');
        return cachedDb;
    }
    await client.connect();
    // 💡 IMPORTANT: Replace 'your_database_name' with your actual MongoDB database name
    // (This is the name of the database where you want to store the "leads" collection)
    cachedDb = client.db('your_database_name'); 
    console.log('New database connection established.');
    return cachedDb;
}

exports.handler = async function (event, context) {
  // Tells Netlify/Lambda to wait until the database connection is resolved 
  context.callbackWaitsForEmptyEventLoop = false; 

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // 3. PARSE ALL THREE FIELDS, including 'message'
  const { name, email, message } = JSON.parse(event.body);

  if (!email || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing name or email' }),
    };
  }
  
  // --- STEP A: MongoDB Insertion ---
  try {
    const db = await connectToDatabase();
    // 💡 IMPORTANT: Replace 'leads' with your actual collection name
    const collection = db.collection('leads'); 

    const dbResult = await collection.insertOne({
        name,
        email,
        message, // <-- The new field is included here!
        submittedAt: new Date(),
        brevoStatus: 'pending' 
    });
    
    console.log(`MongoDB Insert ID: ${dbResult.insertedId}`);

  } catch (error) {
    // Log the database error but proceed to Brevo, as the email list is still a priority
    console.error('MongoDB Insertion Error:', error.message);
  }
  // ---------------------------------


  // --- STEP B: Original Brevo Logic (Remains mostly unchanged) ---
  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error: Brevo API key is missing." })
    };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        attributes: { FIRSTNAME: name },
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: error.message || 'Brevo API error' }),
      };
    }

    // Return success only after both operations have been attempted
    return {
      statusCode: 200,
      body: JSON.stringify({ message: '🎉 Success! Your data is saved and you are subscribed.' }),
    };
  } catch (err) {
    // This catch block handles only Brevo network errors
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error during Brevo call', error: err.message }),
    };
  }
};
