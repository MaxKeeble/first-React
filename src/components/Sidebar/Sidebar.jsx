// import React from 'react';
import { FriendsList } from './FriendsList/FriendsList';
import { Nav } from './Nav/Nav';
import './Sidebar.css';

export function Sidebar({ data }) {
  return (
    <div className='sidebar'>
      <Nav className='sidebar__nav' />

      <FriendsList data={data} vertical={false} count={2} />
    </div>
  )
};