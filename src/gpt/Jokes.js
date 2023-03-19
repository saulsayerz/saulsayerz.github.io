import React, { useState } from 'react';
import Prompt from './Prompt';
import './animation.css'

function Jokes() {
  const [showPrompt, setShowPrompt] = useState(false);


  const handleYesClick = () => {
    setShowPrompt(true);
    // perform other actions here
  };

  const handleNoClick = () => {
    setShowPrompt(true);
    // perform other actions here
  };

  const containerStyle = {
    backgroundColor: '#ffd5d5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const promptStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    transition: 'opacity 300ms ease-in-out'
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
            style={promptStyle}
          />
        )}
        {showPrompt && (
          <Prompt
            question="Web ini bukan buat kamu atuh."
            button="0"
            minHeight="20vh"
            style={promptStyle}
            onYesClick={handleYesClick}
            onNoClick={handleNoClick}
            />
        )}
    </div>
  );
}

export default Jokes;
