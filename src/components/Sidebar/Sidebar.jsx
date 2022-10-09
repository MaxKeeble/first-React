// import React from 'react';
import { FriendsListContainer } from './FriendsList/FriendsList';
import { Nav } from './Nav/Nav';
import './Sidebar.css';

export function Sidebar({ data }) {
  return (
    <div className='sidebar'>
      <Nav className='sidebar__nav' />
      <FriendsListContainer vertical={false} count={2} />
    </div>
  )
};