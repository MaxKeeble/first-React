// import React from 'react';
import './Content.css';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './Profile/Profile';
import Messages from './Messages/Messages';
import { UsersContainer } from './Users/Users';

export function Content() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/*' element={<ProfileContainer />} />
        <Route path='messages/*' element={<Messages />} />
        <Route path='users/*' element={<UsersContainer />} />
      </Routes>
    </div>
  )
};

