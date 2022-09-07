// import React from 'react';
import './PostsList.css';
import { Post } from "./Post/Post";


export function PostsList({ data, avatarImgSrc }) {
  const postsElements = data.map(el =>
    <li className="my-posts__item">
      <Post data={el} avatarImgSrc={avatarImgSrc}/>
    </li>);
  return (
    <ul className="my-posts__list">
      {postsElements}
    </ul>
  )
};