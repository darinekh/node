const nodemailer = require('nodemailer');

// Create a simple SMTP mail server
const smtpServer = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: ''  // Use an app-specific password for security
  }
};

// Create mail options
const mailOptions = {
  from: '',
  to: '',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent directly using Node.js and SMTP!'
};

// Send email using nodemailer directly
nodemailer.createTransport(smtpServer)
  .sendMail(mailOptions)
  .then(info => {
    console.log('Email sent successfully:', info.response);
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
