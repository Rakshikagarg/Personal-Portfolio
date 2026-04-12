import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();

// ✅ CORS (allow your frontend only)
app.use(cors({
  origin: 'https://personal-portfolio-phi-eight-83.vercel.app'
}));

app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// ✅ Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // 🔹 Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();
    console.log('✓ Saved to MongoDB:', contact._id);

    // 🔹 Send email
    console.log('Sending email...');
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    console.log('✓ Email sent successfully');

    res.status(201).json({
      success: true,
      message: "Message received!"
    });

  } catch (err) {
    console.error('✗ Full Error:', err);
    res.status(500).json({
      error: 'Server error. Please try again.'
    });
  }
});

// ✅ PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));