import React from 'react';
import './assets/Profile.css';
import Repos from './Repos';

const Profile = ({ profData, repos }) => {
  console.log(profData);
  return (
    <div className='profile-container'>
      <div className='img-name'>
        <img src={profData.avatar_url} alt="avatar" className='photo'/>
        <div className='names'>
          <h2>{profData.name}</h2>
          <a href={profData.html_url}><p className='login'>{profData.login}</p></a>
        </div>
        <div className='followers'>
          <div className='twoMan'>
            <img src={require('./assets/followers.png')} alt="followers" />
            <p>{profData.followers} followers</p>
          </div>
          <div className='oneMan'>
            <img src={require('./assets/following.png')} alt="following" />
            <p>{profData.following} following</p>
          </div>
        </div>
      </div>
      <div className='repos'>
        <h1>Repositories ({repos.length})</h1>
        <Repos repos={repos} />
      </div>
    </div>
  )
}

export default Profile