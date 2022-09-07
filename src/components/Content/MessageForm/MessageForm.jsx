import React from 'react';
import { addPost_sendMessage_actionCreator, updatePostText_updateMessageText_actionCreator } from '../../../redux/store';
import './MessageForm.css';

export function MessageForm({ textareaText, dispatch, buttonText }) {

  let texareaElement = React.createRef();

  const clickHandler = function (e) {
    e.preventDefault();
    let action = addPost_sendMessage_actionCreator(buttonText);
    dispatch(action);
  };

  const textareaChangeHandler = function () {
    let action = updatePostText_updateMessageText_actionCreator(buttonText, texareaElement.current.value);
    dispatch(action);
  };

  return (
    <form className="post-form form" action="" method="post">
      <textarea className="form__text"
        name="text"
        id="form-text"
        cols="50"
        rows="5"
        ref={texareaElement}
        value={textareaText}
        onChange={textareaChangeHandler}>
      </textarea>
      <button className="form__button" onClick={clickHandler}>{buttonText}</button>
    </form>
  )
};