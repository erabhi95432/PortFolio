const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = path.join(__dirname, "../messages.json");

app.get("/", (req, res) => {
  res.send("Hello Abhishek! Backend is running.");
});

app.post("/api/contact", (req, res) => {
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

  console.log("New contact message received:", newMessage);
  res.status(201).json({ success: true, message: "Message sent successfully!", data: newMessage });
});

module.exports = app;