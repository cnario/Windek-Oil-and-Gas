import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  // --- Manual .env loading fallback ---
  // If SMTP_USER is missing, try to read .env from the root directory
  if (!process.env.SMTP_USER) {
    try {
      const envPath = path.resolve(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        console.log('Loading .env file manually...');
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split('\n').forEach(line => {
          // Skip comments
          if (line.startsWith('#')) return;
          
          const parts = line.split('=');
          if (parts.length >= 2) {
            const key = parts[0].trim();
            // Join the rest in case value has = in it, and remove quotes
            let value = parts.slice(1).join('=').trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            if (key && value) {
              process.env[key] = value;
            }
          }
        });
      } else {
        console.warn('.env file not found at:', envPath);
      }
    } catch (e) {
      console.error('Failed to parse .env file:', e);
    }
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

    // Check credentials before creating transport
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('CRITICAL: SMTP Credentials missing from process.env');
      return res.status(500).json({ 
        ok: false, 
        error: 'Server Configuration Error', 
        details: 'SMTP credentials are not set in environment variables.' 
      });
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
        // Explicitly allow expired/self-signed certificates to fix handshake errors
        rejectUnauthorized: false
      }
    });

    try {
      await transporter.verify();
    } catch (vErr) {
      console.error('SMTP verify failed:', vErr);
      return res.status(500).json({ ok: false, error: 'SMTP Connection Failed', details: vErr.message });
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
}
