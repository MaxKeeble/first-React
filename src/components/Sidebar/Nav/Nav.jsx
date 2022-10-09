// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export function Nav(props) {
  let className = 'nav';
  if (props.className) className += ' ' + props.className;
  return (
    <div className={className}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to='/' className='nav__link'>Profile</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to='/messages' className='nav__link'>Messages</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to='/users' className='nav__link'>Users</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to='/news' className='nav__link'>News</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to='/music' className='nav__link'>Music</NavLink>
        </li>
      </ul>

      <NavLink to='/settings' className='nav__link' >Settings</NavLink>
    </div>
  )
};