import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// ✅ Gmail 
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post('/api/contact', async (req, res) => {
  console.log("Incoming data:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    console.log('✓ Saved to MongoDB:', contact._id);

    console.log('Sending email...');

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        html: `
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      console.log('✓ Email sent successfully');

    } catch (err) {
      console.log('❌ Email failed but continuing:', err.message);
    }

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));