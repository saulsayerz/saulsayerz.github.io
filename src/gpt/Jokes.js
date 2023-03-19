import React, { useState } from 'react';
import Prompt from './Prompt';
import './Jokes.css'; // import the CSS file

function Jokes() {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleYesClick = () => {
    setShowPrompt(true);
  };

  const handleNoClick = () => {
    setShowPrompt(true);
  };

  const containerStyle = {
    backgroundColor: '#ffd5d5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {!showPrompt && (
        <Prompt
          question="Apakah kamu odre?"
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          button="2"
          minHeight="20vh"
          className="fade-in" // add the class to the component
        />
      )}
      {showPrompt && (
        <Prompt
          question="Web ini bukan buat kamu atuh."
          button="0"
          minHeight="20vh"
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          className="fade-in" // add the class to the component
        />
      )}
    </div>
  );
}

export default Jokes;
