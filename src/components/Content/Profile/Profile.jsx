// import React from 'react';
import './Profile.css';
import { User } from './User/User';
import { MyPosts } from './MyPosts/MyPosts';

export function Profile({ data, addPost }) {
  return (
    <div className='content__profile'>
      <User />
      <MyPosts data={data.posts} addPost={addPost} />
    </div>
  )
};