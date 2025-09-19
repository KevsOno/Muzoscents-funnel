const fetch = require('node-fetch');
const SibApiV3Sdk = require('@getbrevo/brevo');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);
  
  if (!email || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing name or email' }),
    };
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoListId = process.env.BREVO_LIST_ID;

  if (!brevoApiKey || !brevoListId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error: Brevo API key or List ID is missing from environment variables." })
    };
  }
  
  try {
    // ACTION 1: Add contact to the mailing list
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        attributes: { FIRSTNAME: name },
        listIds: [Number(brevoListId)],
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

    // ACTION 2: Send an email notification to your inbox
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = brevoApiKey;

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = 'New Lead from Your Website';
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>New Lead Received!</h1>
          <p>You have a new inquiry from your website.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message ? message : 'No message provided'}</p>
        </body>
      </html>
    `;
    sendSmtpEmail.sender = { "email": "mickevsono@gmail.com", "name": "Your Website" };
    sendSmtpEmail.to = [{ "email": "mickevsono@gmail.com" }];

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: '🎉 Thanks! You’re on the list (or already subscribed).' }),
    };
    
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error', error: err.message }),
    };
  }
};
