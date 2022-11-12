import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';

function Profile() {
  console.log('Profile');
  return (
    <div className='content__profile'>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
};

export default Profile;