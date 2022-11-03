// import React from 'react';
import { connect } from 'react-redux';
import './PostsList.css';
import { Post } from "./Post/Post";
import { getPosts, getAvatarImgSrc } from '../../../../../redux/profilePageReducer';

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
    posts: getPosts(state),
    avatarImgSrc: getAvatarImgSrc(state),
  };
};
export const PostsListContainer = connect(mapStateToProps)(PostsList);