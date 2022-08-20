// import React from 'react';
import './Content.css';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './Profile/Profile';
import { Messages } from './Messages/Messages';

export function Content({data}) {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Profile data={data.profile}/>} />
        <Route path='messages/*' element={<Messages />} />
      </Routes>
    </div>
  )
};

