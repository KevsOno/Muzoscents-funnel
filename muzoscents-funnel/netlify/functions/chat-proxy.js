// netlify/functions/chat-proxy.js
exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get the API key from Netlify environment variables
    const API_SECRET_KEY = process.env.API_SECRET_KEY;
    
    if (!API_SECRET_KEY) {
      console.error('API_SECRET_KEY not set in environment');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    const HF_AI_URL = 'https://kevsono-aibot.hf.space/chat';

    // Parse the request body
    const requestBody = JSON.parse(event.body);

    // Forward the request to Hugging Face with the API key
    const response = await fetch(HF_AI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_SECRET_KEY  // Key added securely on server
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    // Return the response to the browser
    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'  // Will restrict to your domain below
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Proxy error: ' + error.message })
    };
  }
};
