require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = path.join(__dirname, "../messages.json");

app.get("/", (req, res) => {
  res.send("Hello Abhishek! Backend is running.");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields." });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };  

  let messages = [];
  if (fs.existsSync(MESSAGES_FILE)) {
    try {
      const data = fs.readFileSync(MESSAGES_FILE, "utf8");
      messages = JSON.parse(data || "[]");
    } catch (err) {
      console.error("Error reading messages file:", err);
    }
  }

  messages.push(newMessage);

  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing messages file:", err);
    return res.status(500).json({ error: "Failed to save message." });
  }

  // Send Email using Nodemailer
  try {
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `You have received a new message from your portfolio contact form:
  
Name: ${name}
Email: ${email}
Message: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 4px; margin-top: 15px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (emailError) {
    console.error("Error sending email via Nodemailer:", emailError);
    return res.status(500).json({ error: "Message saved, but failed to send email. Please check server credentials." });
  }

  console.log("New contact message received:", newMessage);
  res.status(201).json({ success: true, message: "Message sent successfully!", data: newMessage });
});

module.exports = app;