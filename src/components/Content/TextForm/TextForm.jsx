import React from 'react';
import './TextForm.css';

export function TextForm({ clickHandler, textareaChangeHandler, buttonText, currentText }) {

  return (
    <form className="post-form form" action="" method="post">
      <textarea className="form__text"
        name="text"
        id="form-text"
        cols="50"
        rows="5"
        value={currentText}
        onChange={textareaChangeHandler}>
      </textarea>
      <button className="form__button" onClick={clickHandler}>{buttonText}</button>
    </form>
  )
};