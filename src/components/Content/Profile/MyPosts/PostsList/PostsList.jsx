// import React from 'react';
import './PostsList.css';
import { Post } from "./Post/Post";


export function PostsList({data}) {
const postsElements = data.map(el => <li className="my-posts__item">
  <Post imgSrc={el.imgSrc} text={el.text} likeCount={el.likeCount} />
</li>);
  return (
    <ul className="my-posts__list">
      {postsElements}
    </ul>
  )
};