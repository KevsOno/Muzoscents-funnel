const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const { phone } = JSON.parse(event.body);
    
    if (!phone) {
      return { statusCode: 400, body: JSON.stringify({ error: "Phone number required" }) };
    }

    // 1. FORGIVING NORMALIZATION (The winning feature)
    let cleanPhone = phone.toString().replace(/\D/g, '');
    
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '234' + cleanPhone.substring(1);
    } else if (cleanPhone.length === 10 && !cleanPhone.startsWith('234')) {
      cleanPhone = '234' + cleanPhone;
    }

    // 2. DATABASE CONNECTION
    const supabase = createClient(
      process.env.SUPABASE_URL, 
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // 3. QUERY
    const { data, error } = await supabase
      .from('phone_lookup_public')
      .select('first_name, current_points, tier')
      .eq('phone', cleanPhone) 
      .maybeSingle();

    // 4. RESPONSE LOGIC
    if (error) {
      console.error('Database Error:', error.message);
      return { statusCode: 500, body: JSON.stringify({ error: "Service unavailable" }) };
    }

    if (!data) {
      console.log(`Lookup failed for normalized number: ${cleanPhone}`);
      return { statusCode: 404, body: JSON.stringify({ error: "Member not found" }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

  } catch (err) {
    console.error('System Error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};
