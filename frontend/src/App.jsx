// App.jsx

import React from 'react';
import './App.css';
import Recipe from './components/Recipe'; // Import the Recipe component

function App() {
  return (
    <div className="app">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="assets/videos/3295852-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>

      <div className='murdermeals'>
        <header className="hero">
          <h1>MURDER MEALS</h1>
        </header>
      </div>

      <div className='tagline'>
        <h3>Killer recipes     |     Dark dishes     |     Bloody sauce</h3>
      </div>

      <div className='startbutton'>
        <button>Dare to Cook 💀</button>
      </div>

      {/* Recipe Component */}
      <Recipe />  {/* Add the Recipe component here to display it below the main content */}
      
    </div>
  );
}

export default App;
