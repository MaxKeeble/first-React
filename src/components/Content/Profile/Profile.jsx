// import React from 'react';
import './Profile.css';
import { User } from './User/User';
import { MyPosts } from './MyPosts/MyPosts';

export function Profile({data}) {
  return (
    <div className='content__profile'>
      <User />
      <MyPosts data={data.myPosts}/>
    </div>
  )
};