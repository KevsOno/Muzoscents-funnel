const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { phone } = JSON.parse(event.body);
    
    // Pulls from Netlify Environment Variables
    const supabase = createClient(
      process.env.SUPABASE_URL, 
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // We use the View we created to ensure only necessary data is fetched
    const { data, error } = await supabase
      .from('phone_lookup_public')
      .select('first_name, current_points, tier')
      .eq('phone', parseInt(phone))
      .single();

    if (error || !data) {
      return { statusCode: 404, body: JSON.stringify({ error: "Member not found" }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};
