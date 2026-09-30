// Emails contact form submissions via Resend (https://resend.com)
// Env: RESEND_API_KEY (required), CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL (optional overrides)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'nate@liquid-shine.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Liquid Shine Website <quotes@liquid-shine.com>';

const SERVICE_LABELS: Record<string, string> = {
  'auto-detailing': 'Auto Detailing',
  'ceramic-coating': 'Ceramic Coating',
  'paint-correction': 'Paint Correction',
  'boat-detailing': 'Boat Detailing',
  'rv-detailing': 'RV Detailing',
  'maintenance-package': 'Maintenance Package',
  other: 'Other',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const field = (body: Record<string, unknown>, key: string, maxLength: number) =>
  typeof body[key] === 'string' ? (body[key] as string).trim().slice(0, maxLength) : '';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return Response.json({ error: 'Email is not configured' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field
  if (field(body, 'company', 200)) {
    return Response.json({ success: true });
  }

  const name = field(body, 'name', 200);
  const email = field(body, 'email', 200);
  const phone = field(body, 'phone', 50);
  const serviceType = field(body, 'serviceType', 50);
  const message = field(body, 'message', 5000);

  if (!name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please fill in all required fields' }, { status: 400 });
  }

  const service = SERVICE_LABELS[serviceType] || serviceType || 'Not specified';
  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Service', service],
    ['Message', message || '(none)'],
  ];

  const html = `
    <h2 style="font-family:sans-serif">New quote request</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;vertical-align:top">${label}</td>
          <td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td>
        </tr>`,
        )
        .join('')}
    </table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New quote request from ${name} (${service})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error('Contact form: Resend error', res.status, await res.text());
    return Response.json({ error: 'Failed to send' }, { status: 502 });
  }

  return Response.json({ success: true });
}
