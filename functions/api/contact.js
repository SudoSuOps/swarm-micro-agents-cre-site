/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Receives the contact form, sends two emails via Resend:
 *   1. Notification to build@swarmandbee.ai
 *   2. Auto-reply to the submitter
 *
 * Required env var (set in Cloudflare Pages → Settings → Environment Variables):
 *   RESEND_API_KEY  — your Resend API key (never in code/git)
 */

const NOTIFY_TO = "build@swarmandbee.ai";
const FROM = "Swarm & Bee <build@swarmandbee.ai>";
const RESEND_URL = "https://api.resend.com/emails";

function generateId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `CNT-${ts}-${rand}`;
}

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(apiKey, payload) {
  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`Resend ${res.status}:`, body.slice(0, 400));
    }
    return res.ok;
  } catch (err) {
    console.error("Resend network error:", err.message);
    return false;
  }
}

function notifyHtml({ id, name, email, company, message }) {
  const safeName = esc(name);
  const safeEmail = esc(email);
  const safeCompany = esc(company);
  const safeMessage = esc(message);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f7f6f2;font-family:Inter,ui-sans-serif,system-ui,sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;border:1px solid #e8e2d7;overflow:hidden;">
    <div style="background:linear-gradient(180deg,#f2d381,#e8bb49);padding:24px 28px;">
      <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#8a620f;font-weight:700;">SwarmCore · New Inbound</div>
      <div style="font-size:22px;font-weight:700;color:#171717;margin-top:8px;">New contact from ${safeName}</div>
    </div>
    <div style="padding:28px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;color:#5f6670;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;width:110px;vertical-align:top;">Ref</td>
          <td style="padding:10px 0;color:#171717;font-size:0.95rem;font-weight:600;">${id}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#5f6670;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;vertical-align:top;">Name</td>
          <td style="padding:10px 0;color:#171717;font-size:0.95rem;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#5f6670;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;vertical-align:top;">Email</td>
          <td style="padding:10px 0;color:#171717;font-size:0.95rem;"><a href="mailto:${safeEmail}" style="color:#b88317;">${safeEmail}</a></td>
        </tr>
        ${safeCompany ? `<tr>
          <td style="padding:10px 0;color:#5f6670;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;vertical-align:top;">Company</td>
          <td style="padding:10px 0;color:#171717;font-size:0.95rem;">${safeCompany}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:10px 0;color:#5f6670;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;vertical-align:top;">Message</td>
          <td style="padding:10px 0;color:#171717;font-size:0.95rem;line-height:1.7;white-space:pre-wrap;">${safeMessage}</td>
        </tr>
      </table>
    </div>
    <div style="padding:16px 28px;background:#f7f6f2;border-top:1px solid #e8e2d7;font-size:12px;color:#8b93a0;">
      Received via swarmandbee.ai/contact · Reply directly to this email to respond.
    </div>
  </div>
</body>
</html>`.trim();
}

function replyHtml({ name }) {
  const safeName = esc(name);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f7f6f2;font-family:Inter,ui-sans-serif,system-ui,sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;border:1px solid #e8e2d7;overflow:hidden;">
    <div style="background:linear-gradient(180deg,#f2d381,#e8bb49);padding:24px 28px;">
      <div style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase;color:#8a620f;font-weight:700;">Swarm & Bee</div>
      <div style="font-size:22px;font-weight:700;color:#171717;margin-top:8px;">Got it, ${safeName}.</div>
    </div>
    <div style="padding:32px 28px;">
      <p style="margin:0 0 20px;color:#171717;font-size:1rem;line-height:1.8;">
        We received your message and we'll be in touch. If what you're building is serious, we'll have something worth saying.
      </p>
      <p style="margin:0 0 20px;color:#5f6670;font-size:0.95rem;line-height:1.8;">
        In the meantime — the Chain Integrity Map on the site shows exactly where agent systems break. It's worth a look if you haven't been through it.
      </p>
      <p style="margin:0;color:#5f6670;font-size:0.95rem;">— Swarm & Bee</p>
    </div>
    <div style="padding:16px 28px;background:#f7f6f2;border-top:1px solid #e8e2d7;font-size:12px;color:#8b93a0;">
      <a href="https://swarmandbee.ai" style="color:#b88317;text-decoration:none;">swarmandbee.ai</a>
      &nbsp;·&nbsp;
      <a href="https://x.com/swarmandbee" style="color:#b88317;text-decoration:none;">@swarmandbee</a>
    </div>
  </div>
</body>
</html>`.trim();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name = "", email = "", company = "", message = "", website = "" } = body;

  // Honeypot — bots fill the hidden website field, legitimate users don't see it
  if (website) {
    return Response.json({ id: generateId(), emailed: false }, { status: 200 });
  }

  // Validate required fields
  if (!name.trim() || !email.trim() || !message.trim()) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return Response.json({ error: "Email service not configured." }, { status: 500 });
  }

  const id = generateId();

  // Fire both emails — notification + auto-reply
  const [notified, replied] = await Promise.all([
    sendEmail(apiKey, {
      from: FROM,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `New contact: ${name}${company ? ` @ ${company}` : ""} [${id}]`,
      html: notifyHtml({ id, name, email, company, message }),
    }),
    sendEmail(apiKey, {
      from: FROM,
      to: [email],
      subject: "We got your message — Swarm & Bee",
      html: replyHtml({ name }),
    }),
  ]);

  // Notification email is the only record of this contact — fail loudly if it didn't send
  if (!notified) {
    console.error("Notification email failed — contact may be lost", { id, name, email });
    return Response.json(
      { error: "Failed to deliver your message. Please try again or email us directly at build@swarmandbee.ai." },
      { status: 502 },
    );
  }

  return Response.json({ id, emailed: notified, replied }, { status: 200 });
}

// Return 405 for non-POST
export function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  return onRequestPost(context);
}
