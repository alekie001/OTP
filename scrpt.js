vconst express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password', // Use an app password if 2FA is enabled
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Confirmation of Details',
      text: `Hello ${name},\n\nThank you for submitting your details:\nPhone: ${phone}\nEmail: ${email}\n\nBest regards,\nYour Team`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Details submitted successfully! Confirmation email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password', // Use an app password if 2FA is enabled
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Confirmation of Details',
      text: `Hello ${name},\n\nThank you for submitting your details:\nPhone: ${phone}\nEmail: ${email}\n\nBest regards,\nYour Team`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Details submitted successfully! Confirmation email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
