const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log("Hi");

// Serve static files (if needed)
// app.use(express.static('public'));

app.post("/submit_contact_form", (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required field." });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required field." });
  }

  if (!message) {
    return res.status(400).json({ error: "Message is required field." });
  }

  if (!name || !message || !email) {
    return res
      .status(400)
      .json({ error: "Name and message are required fields." });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "saatvikgeetha@gmail.com",
      pass: "Geetha#2001",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "saatvikgeetha@gmail.com",
    subject: "New Message from Your Portfolio",
    text: `From: ${name}${email ? " (" + email + ")" : ""}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending message." });
    }
    console.log("Email sent:", info.response);
    res.json({ success: "Message sent successfully!" });
  });
});

const port = 3002; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
