import logo from './logo.svg';
import './App.css';


function App() {
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
        <input type='text' id='engtxt' placeholder='Englis text goes here....'></input>
        <button id='translate'>
          translate
        </button>
        <div id='brottxt'><p>Skibidi toilet sigma text</p></div>
      </div>
      <div className="video-container">
        <video controls autoPlay loop muted width="200" height="600">
          <source src="/vibeos/vibeo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <h1 id='title'>BRAINOT TRANSLATOR
    <p id='subhead'>Skibbidi sigma ohio gyat ermm what da sigma knee surgery tomorrow fanum tax from the screen to the ring to the bend to the king</p>
    </h1>

  </div>
</div>
  );
}

export default App;
