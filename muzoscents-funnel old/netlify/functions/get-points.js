const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { phone } = JSON.parse(event.body);
  
  // These are pulled securely from Netlify's backend, invisible to the user
  const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase
    .from('phone_lookup_public')
    .select('first_name, current_points, tier')
    .eq('phone', phone)
    .single();

  if (error || !data) {
    return { statusCode: 404, body: JSON.stringify({ error: "User not found" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
