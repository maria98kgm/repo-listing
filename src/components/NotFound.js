import React from 'react';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className='notFound-container'>
      <img src={require('../images/not-found.png')} alt="union" />
      <p>User not found</p>
    </div>
  )
}

export default NotFound;