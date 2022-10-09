// import React from 'react';
import { connect } from 'react-redux';
import { addPost_sendMessage_actionCreator, updatePostText_updateMessageText_actionCreator } from '../../../redux/store';
import { TextForm } from './TextForm';

const mapStateToProps = (state, myProps) => {
  return {
    buttonText: myProps.buttonText,
    currentText: myProps.currentText,
  };
};

const mapDispatchToProps = (dispatch, myProps) => {
  return {
    clickHandler: function (e) {
      e.preventDefault();
      let action = addPost_sendMessage_actionCreator(myProps.buttonText);
      dispatch(action);
    },
    textareaChangeHandler: function (e) {
      let action = updatePostText_updateMessageText_actionCreator(myProps.buttonText, e.target.value);
      dispatch(action);
    },
  }
};

export const TextFormContainer = connect(mapStateToProps, mapDispatchToProps)(TextForm);