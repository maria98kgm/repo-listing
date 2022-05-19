import React from 'react';
import './assets/InitialState.css';

const InitialState = () => {
  return (
    <div className='is-container'>
      <img src={require('./assets/image2.png')} alt="union" />
      <p>Start with searching<br /> a GitHub user</p>
    </div>
  )
}

export default InitialState;