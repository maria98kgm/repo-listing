import React from 'react';
import './assets/NotFound.css';

const NotFound = () => {
  return (
    <div className='nf-container'>
      <img src={require('./assets/Union.png')} alt="union" />
      <p>User not found</p>
    </div>
  )
}

export default NotFound;