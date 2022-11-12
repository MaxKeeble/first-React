import React from 'react';
import ReactDOM from 'react-dom';
import profilePageReducer from "./profilePageReducer";


test('length of posts should be incremented', () => {
  // 1. Test data
  let action = addPostActionCreator('Denis is my love');
  let state = {
    posts: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
        likeCount: '10'
      }, {
        id: 2,
        text: 'Hello, Vova!!!',
        likeCount: '8'
      }, {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
        likeCount: '28'
      }, {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
        likeCount: '222'
      },
    ]
  };
  // 2. Action
  let newState = profilePageReducer(state, action);
  // 3. Expectation
  expect(newState.posts.length).toBe(5);
});