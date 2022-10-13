import React from 'react';
import './TextForm.css';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/messagesPageReducer';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profilePageReducer';

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


//Mesages

const mapStateToPropsForMessages = (state, myProps) => {
  return {
    buttonText: 'Add message',
    currentText: state.messagesPage.newMessageText,
  };
};

const mapDispatchToPropsForMessages = (dispatch, myProps) => {
  return {
    clickHandler: function (e) {
      e.preventDefault();
      let action = sendMessageActionCreator();
      dispatch(action);
    },
    textareaChangeHandler: function (e) {
      let action = updateMessageTextActionCreator(e.target.value);
      dispatch(action);
    },
  }
};

export const TextFormForMessagesContainer = connect(mapStateToPropsForMessages, mapDispatchToPropsForMessages)(TextForm);


//Posts

const mapStateToPropsForPosts = (state, myProps) => {
  return {
    buttonText: 'Add post',
    currentText: state.profilePage.newPostText,
  };
};

const mapDispatchToPropsForPosts = (dispatch, myProps) => {
  return {
    clickHandler: function (e) {
      e.preventDefault();
      let action = addPostActionCreator();
      dispatch(action);
    },
    textareaChangeHandler: function (e) {
      let action = updatePostTextActionCreator(e.target.value);
      dispatch(action);
    },
  }
};

export const TextFormForPostsContainer = connect(mapStateToPropsForPosts, mapDispatchToPropsForPosts)(TextForm);