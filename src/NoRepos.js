import React from 'react';
import './assets/NoRepos.css';

const NoRepos = () => {
  return (
    <div className='no-repos'>
      <img src={require('./assets/no-repos.png')} alt="union" />
      <p>Repository list is empty</p>
    </div>
  )
}

export default NoRepos