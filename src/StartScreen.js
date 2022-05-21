import React from 'react';
import './assets/StartScreen.css';

const StartScreen = () => {
  return (
    <div className='startScreen-container'>
      <img src={require('./assets/big-loupe.png')} alt="union" />
      <p>Start with searching<br /> a GitHub user</p>
    </div>
  )
}

export default StartScreen;