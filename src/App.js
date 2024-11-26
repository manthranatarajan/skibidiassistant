import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { getUnhelpfulResponse } from "./chatbotlogic";

function App() {

  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    const botResponse = getUnhelpfulResponse(userInput);
    setChatHistory([...chatHistory, { sender: "You", text: userInput }, { sender: "Bot", text: botResponse }]);
    setUserInput(""); // Clear input field
  };

  
  return (
    <div className="App">
      <div className="chat-window">
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={message.sender === "You" ? "user-message" : "bot-message"}>
              <strong>{message.sender}: </strong>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;