// import React from 'react';
import { connect } from 'react-redux';
import './PostsList.css';
import { Post } from "./Post/Post";

export function PostsList({ posts, avatarImgSrc }) {
  const postsElements = posts.map(el =>
    <li className="my-posts__item" key={el.id}>
      <Post data={el} avatarImgSrc={avatarImgSrc} />
    </li>);

  return (
    <ul className="my-posts__list">
      {postsElements}
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    posts: [...state.profilePage.posts],
    avatarImgSrc: state.profilePage.avatarImgSrc,
  };
};

export const PostsListContainer = connect(mapStateToProps)(PostsList);