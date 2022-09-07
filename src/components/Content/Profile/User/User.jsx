// import React from 'react';
import './User.css';
import { UserDescription } from './UserDescription/UserDescription';

export function User() {
  return (
    <div className="user">
      <img className='user__banner' src="https://klike.net/uploads/posts/2019-07/1562069960_6.jpg" alt="banner" />
      <img className='user__avatar' src="/img/user-ava.jpg" alt="avatar" />
      <UserDescription />
    </div>
  )
};