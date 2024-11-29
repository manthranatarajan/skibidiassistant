// Import necessary modules
import { useState } from "react";

// Function to handle chatbot logic (communicating with the backend)
export const getUnhelpfulResponse = async (userInput) => { // Exported function
  try {
    // Sending the user's input to the backend server
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: userInput }),
    });

    // Handling the server's response
    if (response.ok) {
      const data = await response.json();
      return data.choices[0].message.content; // Assuming the response follows OpenAI's format
    } else {
      console.error("Failed to get response from server:", response.statusText);
      return "Oops, something went wrong!";
    }
  } catch (error) {
    console.error("Error with API:", error);
    return "Oops, something went wrong!";
  }
};

// React component for the chatbot UI
export const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    // Display the user's message in the chat
    const newMessage = {
      sender: "User",
      text: userInput,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Get the unhelpful response from the OpenAI API (via backend)
    const responseText = await getUnhelpfulResponse(userInput);

    // Display the assistant's sarcastic response in the chat
    const assistantMessage = {
      sender: "Assistant",
      text: responseText,
    };
    setMessages((prevMessages) => [...prevMessages, assistantMessage]);

    // Clear the input field after sending the message
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <h2>Unhelpful Personal Assistant</h2>
      <div className="chat-window">
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        {/* Input for the user to type a message */}
        <input
          type="text"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
