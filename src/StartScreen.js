import React from 'react';
import './css/StartScreen.css';

const StartScreen = () => {
  return (
    <div className='startScreen-container'>
      <img src={require('./images/big-loupe.png')} alt="union" />
      <p>Start with searching<br /> a GitHub user</p>
    </div>
  )
}

export default StartScreen;