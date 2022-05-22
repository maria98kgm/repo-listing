import React from 'react';
import '../css/NoRepos.css';

const NoRepos = () => {
  return (
    <div className='no-repos'>
      <img src={require('../images/no-repos.png')} alt="union" />
      <p>Repository list is empty</p>
    </div>
  )
}

export default NoRepos