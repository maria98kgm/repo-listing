import React from 'react';
import './assets/Profile.css';
import Repos from './Repos';

const Profile = ({ profData, repos }) => {
  return (
    <div className='profile-container'>
      <div className='picture-and-name'>
        <div className='photo'>
          <img src={profData.avatar_url} alt="avatar" />
        </div>
        <div className='names'>
          <h2>{profData.name}</h2>
          <a href={profData.html_url}><p className='login'>{profData.login}</p></a>
        </div>
        <div className='fans'>
          <div className='followers'>
            <img src={require('./assets/followers.png')} alt="followers" />
            <p>{profData.followers} followers</p>
          </div>
          <div className='following'>
            <img src={require('./assets/following.png')} alt="following" />
            <p>{profData.following} following</p>
          </div>
        </div>
      </div>
      <div className='repos'>
        <Repos repos={repos} />
      </div>
    </div>
  )
}

export default Profile