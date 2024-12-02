import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./LandingPage.css"; // Import the styles for the page

function MainPage() {
  return (
    <div className="main-page">
      <h1>Welcome to Brainrot Central</h1>
      <p>Click below to talk to your very unhelpful assistant:</p>
      <Link to="/chatbot" className="chatbot-link">
        Open Chatbot
      </Link>
    </div>
  );
}

export default MainPage;
