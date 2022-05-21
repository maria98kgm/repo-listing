import React from 'react';
import './assets/NotFound.css';

const NotFound = () => {
  return (
    <div className='notFound-container'>
      <img src={require('./assets/not-found.png')} alt="union" />
      <p>User not found</p>
    </div>
  )
}

export default NotFound;