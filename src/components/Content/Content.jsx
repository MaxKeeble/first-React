// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.css';
import ProfileContainer from './Profile/Profile';
import Messages from './Messages/Messages';
import { UsersContainer } from './Users/Users';
import Login from './Login/Login';

export function Content() {
  return (
    <div className='content'>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/*' element={<ProfileContainer />} />
        <Route path='messages/*' element={<Messages />} />
        <Route path='users/*' element={<UsersContainer />} />
      </Routes>
    </div>
  )
};

