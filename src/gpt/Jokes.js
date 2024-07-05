import React, { useState } from 'react';
import Prompt from './Prompt';
import './Jokes.css'; // import the CSS file
import { jokesOri } from './questions';
import Login from './Login';

var jokes = jokesOri
for (let i = jokes.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [jokes[i], jokes[j]] = [jokes[j], jokes[i]];
}

function Jokes() {
  const [showPrompt, setShowPrompt] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false)


  const handleYesClick = () => {
    setShowPrompt(2);
  };

  const handleNoClick = () => {
    setShowPrompt(1);
  };

  const handleEndClick = () => {
    setShowPrompt(-1);
  };

  const getAnswerClick = () => {
    setShowAnswer(true);
  };

  const nextQuestionClick = () => {
    setShowAnswer(false);
    let newVal = showPrompt + 1
    setShowPrompt(newVal);
  };
  const containerStyle = {
    backgroundImage: 'linear-gradient(45deg, #56CCF2, #2F80ED, #1C92D2)',
    backgroundPosition: '0% 50%',
    animation: 'GradientAnimation 10s ease infinite',
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  };
  
  return (
    <div style={containerStyle}>
      {showPrompt === 0 && (
        <Login 
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}/>
      )}
      {showPrompt === 1 && (
        <Prompt
          question="Web ini bukan buat kamu atuh"
          answer = ""
          button="-999"
          showAnswer = {true}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          className="fade-in" // add the class to the component
        />
      )}
      {showPrompt === -1 && (
        <Prompt
          question="Yey teori saul > ovt della :)"
          answer = ""
          button="-99"
          showAnswer = {true}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          className="fade-in" // add the class to the component
        />
      )}
      {showPrompt === 3 + jokes.length && (
        <Prompt
          question="Teorinya udah habiisss :("
          answer = ""
          button="-100"
          showAnswer = {true}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          className="fade-in" // add the class to the component
        />
      )}
      {showPrompt === 2 && (
        <Prompt
          question="Web ini dibuka tiap kali della ovt aneh2"
          answer = "Isinya adalah kumpulan teori saul dan lawakan untuk melawan ovt tsb"
          button="-1"
          showAnswer = {true}
          onYesClick={nextQuestionClick}
          onNoClick={handleNoClick}
          className="fade-in" // add the class to the component
        />
      )}
      {showPrompt > 2 && showPrompt < 3 + jokes.length && (
        <Prompt
          question= {jokes[showPrompt-3].question}
          answer = {jokes[showPrompt-3].answer}
          button="1"
          showAnswer = {showAnswer}
          onYesClick={nextQuestionClick}
          onNoClick={getAnswerClick}
          onEndClick={handleEndClick}
          className="fade-in" // add the class to the component
        />
      )}
    </div>
  );
}

export default Jokes;
