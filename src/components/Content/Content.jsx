import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.css';
import ProfileContainer from './Profile/Profile';
import { UsersContainer } from './Users/Users';
import Login from './Login/Login';
import { Suspense } from 'react';
import { Preloader } from '../common/Preloader/Preloader';

const Messages = React.lazy(() => import(`./Messages/Messages`));


export function Content() {
  return (
    <div className='content'>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='messages/*' element={<Messages />} />
          <Route path='users/:currentPageNumber' element={<UsersContainer />} />
          <Route path='users/' element={<UsersContainer />} />
          <Route path='/*' element={<ProfileContainer />} />
        </Routes>
      </Suspense>
    </div>
  )
};