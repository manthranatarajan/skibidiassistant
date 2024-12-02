const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai"); // Use the correct OpenAI module (new version)

require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Make sure to use the correct key
});

app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body.input;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if needed
      messages: [{ role: "user", content: userInput }],
    });
    res.json(response); // Send response back to the client
  } catch (error) {
    console.error("Error from OpenAI:", error.message);
    res.status(500).json({ error: "Failed to fetch response from OpenAI API" });
  }
});

app.listen(8080, 'localhost', () => {
  console.log("Server is running on http://localhost:8080");
});

app.use(cors({
  origin: "http://localhost:3000", // Allow the frontend to access the backend
  methods: "GET,POST",
}));


//logs
app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body.input;
    console.log("Received user input:", userInput); // Log input
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }],
    });
    
    console.log("OpenAI response:", response); // Log OpenAI response
    res.json(response);
  } catch (error) {
    console.error("Error from OpenAI:", error.message);
    res.status(500).json({ error: "Failed to fetch response from OpenAI API" });
  }
});


