// backend to make API requests

const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body.input;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4"
      messages: [{ role: "user", content: userInput }],
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
