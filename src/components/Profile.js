import React from 'react';
import '../css/Profile.css';
import Repos from './Repos';

const Profile = ({ profData, repos }) => {
  const addPrefix = (num) => {
    if (num >= 1000) {
      let check_hundr = num - (Math.floor(num / 1000) * 1000);
      if (check_hundr >= 100) {
        let hundreds = Math.floor(check_hundr / 100);
        return `${Math.floor(num / 1000)}.${hundreds}k`;
      }
      else return `${Math.floor(num / 1000)}k`;
    }
    return num;
  }
  return (
    <div className='profile-container'>
      <div className='picture-and-name'>
        <div className='photo'>
          <img src={profData.avatar_url} alt="avatar" />
        </div>
        <div className='names'>
          <h2>{profData.name}</h2>
          <a href={profData.html_url} target="_blank" rel="noreferrer"><p className='login'>{profData.login}</p></a>
        </div>
        <div className='fans'>
          <div className='followers'>
            <img src={require('../images/followers.png')} alt="followers" />
            <p>{addPrefix(profData.followers)} followers</p>
          </div>
          <div className='following'>
            <img src={require('../images/following.png')} alt="following" />
            <p>{addPrefix(profData.following)} following</p>
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
