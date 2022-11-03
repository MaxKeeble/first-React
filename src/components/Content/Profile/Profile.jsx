import React from 'react';
import './Profile.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import { MyPosts } from './MyPosts/MyPosts';

function Profile() {
  return (
    <div className='content__profile'>
      <ProfileDescription />
      <MyPosts />
    </div>
  )
};

export default Profile;