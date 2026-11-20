export default async (req) => {
  try {
    const body = await req.json();
    const payload = body.payload || {};
    const formName = payload.form_name || payload.formName || "demo-request";

    if (formName !== "demo-request") {
      return new Response(JSON.stringify({ ignored: true }), { status: 200 });
    }

    const d = payload.data || {};
    const esc = (v = "") =>
      String(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const rows = [
      ["Business", d.business],
      ["Industry", d.industry],
      ["Branches", d.branches],
      ["Contact", d.name],
      ["Role", d.role],
      ["Email", d.email],
      ["Phone / WhatsApp", d.phone],
      ["Interest", d.interest],
      ["Challenge", d.message],
    ]
      .filter(([, val]) => val && String(val).trim() !== "")
      .map(
        ([label, val]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#1e293b;width:150px;vertical-align:top;">${esc(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#334155;vertical-align:top;">${esc(val).replace(/\n/g, "<br>")}</td>
        </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
        <div style="background:#0f172a;color:#ffffff;padding:20px 24px;">
          <div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#93c5fd;margin-bottom:4px;">Kevs Digital · Demo Request</div>
          <h2 style="margin:0;font-size:20px;font-weight:700;">New Lead: ${esc(d.business || "Enquiry")}</h2>
        </div>
        <div style="padding:20px 24px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rows}
          </table>
        </div>
      </div>`;

    // Example using Brevo transactional email API (set BREVO_API_KEY in Netlify env vars)
    if (process.env.BREVO_API_KEY) {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "Kevs Digital Alerts", email: "kevsdigital1@gmail.com" },
          to: [{ email: "kevsdigital1@gmail.com", name: "Kevs Digital" }],
          replyTo: d.email ? { email: d.email, name: d.name || d.business || "Lead" } : undefined,
          subject: `New Demo Request: ${d.business || "Enquiry"} (${d.industry || "General"})`,
          htmlContent: html,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Brevo error:", res.status, errText);
      }
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("submission-created error:", err);
    return new Response(JSON.stringify({ error: "Failed to process submission" }), { status: 500 });
  }
};
