// import React from 'react';
import './PostForm.css';

export function PostForm() {
  return (
    <form className="post-form form" action="" method="post">
      <input type="text" name="post-text" id="post-text" />
      <input type="button" value="Send" />
    </form>
  )
};