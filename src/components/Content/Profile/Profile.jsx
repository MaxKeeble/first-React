// import React from 'react';
import './Profile.css';
import { User } from './User/User';
import { MyPosts } from './MyPosts/MyPosts';

export function Profile({ data, addPost, updatePostText }) {
  return (
    <div className='content__profile'>
      <User />
      <MyPosts data={data} addPost={addPost} updatePostText={updatePostText} />
    </div>
  )
};