const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email } = JSON.parse(event.body);

  if (!email || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing name or email' }),
    };
  }

  // *** ADD THIS DEBUGGING LINE HERE ***
  const brevoApiKey = process.env.BREVO_API_KEY;
  console.log("DEBUG: Brevo API Key status:", brevoApiKey ? "******** (key detected)" : "undefined/missing");
  // **********************************

  // Add a check for the key's presence before proceeding with the API call
  if (!brevoApiKey) {
    return {
        statusCode: 500,
        body: JSON.stringify({ message: "Server configuration error: Brevo API key is missing from environment variables." })
    };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey, // Use the variable here
      },
      body: JSON.stringify({
        email: email,
        attributes: { FIRSTNAME: name },
        listIds: [Number(process.env.BREVO_LIST_ID)], // This conversion is correct
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

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscribed successfully' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error', error: err.message }),
    };
  }
};
