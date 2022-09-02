import React from 'react';
import './PostForm.css';


export function PostForm({ newPostText, addPost, updatePostText }) {

  let texareaElement = React.createRef();

  const clickHandler = function (e) {
    e.preventDefault();
    addPost();
  };

  const textareaChangeHandler = function (e) {
    updatePostText(texareaElement.current.value);
  };

  return (
    <form className="post-form form" action="" method="post">
      <textarea className="form__text"
        name="text"
        id="form-text"
        cols="50"
        rows="5"
        ref={texareaElement}
        value={newPostText}
        onChange={textareaChangeHandler}
      ></textarea>
      <button className="form__button" onClick={clickHandler}>Добавить пост</button>
    </form>
  )
};