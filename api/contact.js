// api/contact.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email setup
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: duncansihongo@gmail.com,  // Your Gmail address
          // Your Gmail app password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER,  // Your email to receive the messages
        subject: Message from ${name},
        text: Message from ${name} (${email}): ${message},
      });

      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(Method ${req.method} Not Allowed);
  }
}
