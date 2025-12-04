import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, message, website, form_time } = req.body || {};

    // 1) Honeypot: silently drop if filled
    if (website && String(website).trim() !== '') {
      console.warn('Honeypot triggered. Dropping submission.', { website });
      return res.status(200).json({ ok: true, message: 'Message sent' });
    }

    // 2) Speed check: if submitted too quickly (<5s), treat as bot
    const now = Date.now();
    let loadedAt = parseInt(form_time, 10) || now;
    if (loadedAt > 0 && loadedAt < 1e12 && loadedAt < 1e11) loadedAt = loadedAt * 1000;
    if (!loadedAt || loadedAt <= 0) loadedAt = now;
    const delta = now - loadedAt;
    
    // 5 seconds threshold
    if (delta < 5000) {
      console.warn('Fast submission detected. Delta:', delta);
      return res.status(200).json({ ok: true, message: 'Message sent' });
    }

    // Basic validation
    if (!email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: process.env.MAILU_TLS_REJECT_UNAUTHORIZED !== 'false'
      }
    });

    try {
      await transporter.verify();
    } catch (vErr) {
      console.error('SMTP verify failed:', vErr);
      return res.status(500).json({ ok: false, error: 'SMTP Configuration Error' });
    }

    const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const toAddress = process.env.TO_EMAIL || 'info@windekoilandgasltd.com';

    const mailOptions = {
      from: `"Windek Website" <${fromAddress}>`,
      to: toAddress,
      subject: `New Inquiry from ${name || 'Website Visitor'}`,
      replyTo: email,
      text:
          `You have a new contact request from the Windek Oil and Gas website.\n\n` +
          `Name: ${name || 'N/A'}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || 'N/A'}\n\n` +
          `Message:\n${message}\n`
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: 'Message sent successfully' });

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ ok: false, error: 'Server error', details: String(err) });
  }
};