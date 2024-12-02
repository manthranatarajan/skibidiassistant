import React from "react";
import { Link } from "react-router-dom"; 
import "./LandingPage.css"; 
//ts dont work gang smh
function LandingPage() {
  return (
    <div className="main-page">
      <h1>Welcome to Brainrot Central</h1>
      <p>Click below to talk to your very unhelpful assistant:</p>
      <Link to="/chatbot" className="chatbot-link">
        Open Chatbot
      </Link>
      <Link to="/translator" className="translator-link">
        Go to Translator
      </Link>
    </div>
  );
}

export default LandingPage;
