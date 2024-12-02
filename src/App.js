import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Chatbot from './Chatbot';         
import Translator from './Translator';   
function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
  );
}

export default App;
