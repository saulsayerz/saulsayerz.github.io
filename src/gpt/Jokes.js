import React, { useState, useEffect } from 'react';
import Prompt from './Prompt';
import './Jokes.css'; // import the CSS file
import { jokesOri } from './questions';

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
    backgroundImage: 'linear-gradient(45deg, #FBF155, #FD8F40, #FF9F21)',
    backgroundPosition: '0% 50%',
    animation: 'GradientAnimation 10s ease infinite',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  };
  
  return (
    <div style={containerStyle}>
      {showPrompt === 0 && (
        <Prompt
          question="Apakah kamu odre?"
          answer = ""
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          showAnswer = {true}
          button="2"
          className="fade-in" // add the class to the component
        />
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
          question="Yeyy semoga semakin good mood :)"
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
          question="Jokesnya udah habiisss :("
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
          question="I heard you had a hard day"
          answer = "So here i made you some jokes, hope it makes you feel better :D"
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
