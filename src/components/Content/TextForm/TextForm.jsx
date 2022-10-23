import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import './TextForm.css';
import { sendMessageActionCreator } from '../../../redux/messagesPageReducer';
import { addPostActionCreator } from '../../../redux/profilePageReducer';

export function TextForm({ onSubmit, buttonText }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, pristine, form, submitting }) => (
        <form className="post-form form" onSubmit={handleSubmit}>
          <Field className="form__text" name='text' component='textarea' />
          <button className="form__button">{buttonText}</button>
        </form>
      )}
    </Form>
  )
};

//Mesages
const mapStateToPropsForMessages = (state, myProps) => {
  return {
    buttonText: 'Add message',
  };
};
const mapDispatchToPropsForMessages = (dispatch, myProps) => {
  return {
    onSubmit: function (data, functions) {
      let action = sendMessageActionCreator(data.text);
      dispatch(action);
      functions.reset();
    },
  }
};
export const TextFormForMessagesContainer = connect(mapStateToPropsForMessages, mapDispatchToPropsForMessages)(TextForm);

//Posts
const mapStateToPropsForPosts = (state, myProps) => {
  return {
    buttonText: 'Add post',
  };
};
const mapDispatchToPropsForPosts = (dispatch, myProps) => {
  return {
    onSubmit: function (data, functions) {
      let action = addPostActionCreator(data.text);
      dispatch(action);
      functions.reset();
    },
  }
};
export const TextFormForPostsContainer = connect(mapStateToPropsForPosts, mapDispatchToPropsForPosts)(TextForm);