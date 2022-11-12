import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import './TextForm.css';
import { sendMessageActionCreator } from '../../../redux/messagesPageReducer';
import { addPostActionCreator } from '../../../redux/profilePageReducer';
import { composeValidators, validators } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';


export function TextForm({ onSubmit, buttonText }) {
  return (
    <Form onSubmit={onSubmit}>
      {(props) => {
        let { handleSubmit } = props;
        return <form className="post-form form" onSubmit={handleSubmit}>
          <div>
            <Textarea name='text' validate={composeValidators(
              validators.required,
              validators.minLength(4),
              validators.maxLength(100))}
              className="form__text"
              placeholder="Write a message please"
            />
          </div>
          <button className="form__button" type='submit'>{buttonText}</button>
        </form>
      }}

    </Form>
  )
};

// Messages
const mapStateToPropsForMessages = (state, myProps) => {
  return {
    buttonText: 'Add a message',
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

// Posts
const mapStateToPropsForPosts = (state, myProps) => {
  return {
    buttonText: 'Add a post',
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