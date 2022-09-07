// import React from 'react';
import './Content.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { Messages } from './Messages/Messages';

export function Content({ profilePageData, messagesPageData, dispatch }) {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Profile data={profilePageData} dispatch={dispatch} />} />
        <Route path='messages/*' element={<Messages data={messagesPageData} dispatch={dispatch} />} />
      </Routes>
    </div>
  )
};

