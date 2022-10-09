// import React from 'react';
import './Content.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { Messages } from './Messages/Messages';
import { UsersContainer } from './Users/Users';

export function Content({ profilePageData, messagesPageData, dispatch, store }) {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Profile data={profilePageData} store={store} />} />
        <Route path='messages/*' element={<Messages store={store} />} />
        <Route path='users/*' element={<UsersContainer />} />
      </Routes>
    </div>
  )
};

