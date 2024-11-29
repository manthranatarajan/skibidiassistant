import React, { useState } from 'react'; // Import React and useState hook
import './Translator.css';

// Load the Gen Z dictionaries (English to Gen Z and Gen Z to English)
const genzDict = require('./genz_slangs.json');

function Translator() {
  // State to hold the input text from the user
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isEnglishToGenZ, setIsEnglishToGenZ] = useState(true); // State to track the translation mode

  // Function to handle the translation when the button is clicked
  const handleTranslate = () => {
    const translated = isEnglishToGenZ ? translateToGenZ(inputText) : translateToEnglish(inputText);
    setTranslatedText(translated); // Set the translated text
  };

  // english to slang
  function translateToGenZ(englishSentence) {
    const words = englishSentence.split(' ');
    const translated = words.map(word => genzDict.english_to_genz[word.toLowerCase()] || word); // use genzslangs.json
    return translated.join(' '); // join words to sentence
  }

  // Slang to english
  function translateToEnglish(brainrotSentence) {
    const words = brainrotSentence.split(' ');
    const translated = words.map(word => genzDict.genz_to_english[word.toLowerCase()] || word); // use genzslangs.json
    return translated.join(' '); // join words to sentence
  }

  // Toggle between translation modes (English to Brainrot and Brainrot to English)
  const toggleTranslationMode = () => {
    setIsEnglishToGenZ(!isEnglishToGenZ);
    setTranslatedText(''); // Reset
    setInputText(''); // Reset 
  };

  return (
    <div>
      <div className='mainContainer'>
        <div className="app">
          <div className="video-container">
            <video controls autoPlay loop muted width="200" height="600">
              <source src="/vibeos/vibeo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='parentContainer'>
            <input
              type='text'
              id='engtxt'
              placeholder={isEnglishToGenZ ? 'English text goes here....' : 'Brainrot text goes here....'}
              value={inputText} // Bind the input value to state
              onChange={(e) => setInputText(e.target.value)} // Update state on user input
            />
            <button id='translate' onClick={handleTranslate}>
              Translate
            </button>
            <div id='brottxt'>
              <p>{translatedText || 'Skibidi toilet sigma text'}</p> {/* Display the translated text or skibidi sigma ohio gyatt rizz level 10000 */}
            </div>
          </div>
          <div className="video-container">
            <video controls autoPlay loop muted width="200" height="600">
              <source src="/vibeos/vibeo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <h1 id='title'>BRAINROT TRANSLATOR</h1>
        <p id='subhead'>
          Skibidi sigma ohio gyat ermm what da sigma knee surgery tomorrow fanum tax from the screen to the ring to the bend to the king
        </p>
        <button onClick={toggleTranslationMode}>
          Switch to {isEnglishToGenZ ? 'Brainrot to English' : 'English to Brainrot'}
        </button>
      </div>
    </div>
  );
}

export default Translator;
