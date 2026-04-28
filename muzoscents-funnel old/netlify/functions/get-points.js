const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  // 1. Security Guard: Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  try {
    // 2. Data Preparation
    const { phone } = JSON.parse(event.body);
    
    if (!phone) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: "Phone number is required" }) 
      };
    }

    // Clean the phone number (remove +, spaces, or dashes)
    const cleanPhone = phone.toString().replace(/\D/g, '');

    // 3. Database Connection
    const supabase = createClient(
      process.env.SUPABASE_URL, 
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // 4. Execution
    // We use maybeSingle() to prevent unnecessary error logs when a user isn't found
    const { data, error } = await supabase
      .from('phone_lookup_public')
      .select('first_name, current_points, tier')
      .eq('phone', cleanPhone) 
      .maybeSingle();

    // 5. Response Logic
    if (error) {
      console.error('Database Error:', error.message);
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: "Service temporarily unavailable" }) 
      };
    }

    if (!data) {
      console.log(`Lookup failed for: ${cleanPhone}`);
      return { 
        statusCode: 404, 
        body: JSON.stringify({ error: "Member not found" }) 
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

  } catch (err) {
    console.error('System Error:', err.message);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Internal Server Error" }) 
    };
  }
};
