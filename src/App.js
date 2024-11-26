//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { getUnhelpfulResponse } from "./chatbotlogic";

function App() {

  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!userInput.trim()) return; // Ignore empty input

    // Add user input to chat history
    setChatHistory((prev) => [...prev, { sender: "User", text: userInput }]);
    setIsLoading(true); // Show loading indicator

    try {
      const response = await getUnhelpfulResponse(userInput);
      // Add chatbot response to chat history
      setChatHistory((prev) => [...prev, { sender: "Chatbot", text: response }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "Chatbot", text: "Oops! Something went wrong." },
      ]);
    }

    setIsLoading(false); // Hide loading indicator
    setUserInput(""); // Clear input field
  };

  return (
    <div className="App">
      <h1>Unhelpful Personal Assistant</h1>

      <div className="chatbox">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={message.sender === "User" ? "user-message" : "chatbot-message"}
          >
            <strong>{message.sender}: </strong>
            {message.text}
          </div>
        ))}

        {isLoading && <div className="loading">Chatbot is thinking...</div>}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;