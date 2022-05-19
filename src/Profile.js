import React from 'react'

const Profile = ({ profData }) => {
  return (
    <div>
      <div>
        <img src={profData.avatar_url} alt="avatar" />
        <h2>{profData.login}</h2>
      </div>
    </div>
  )
}

export default Profile