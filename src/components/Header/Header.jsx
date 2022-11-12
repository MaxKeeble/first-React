import React from 'react';
import { connect } from 'react-redux';
import { getAuthorizedUserEmail, getIsAuthorized, getIsFetching, logout } from '../../redux/authorizationReducer';
import './Header.css';
import { Preloader } from '../common/Preloader/Preloader';

function Header(props) {
  return (
    <header className='header'>
      <img className='header__img' src="https://i.pinimg.com/originals/6c/35/c1/6c35c195654c1b5d481d048aa42630fd.jpg" alt="logo" />
      {
        props.isFetching
          ? <Preloader />
          : (props.isAuthorized
            ? (<div className='header__authorization'>
              <span className='header__login-span'> You authorized: {props.authorizedUserEmail}</span>
              <button className='header__logout-BTN' onClick={props.logout}>Logout</button>
            </div>)
            : <a href='/' className='header__login-link'>Login</a>)
      }
    </header>
  )
}


const mapStateToProps = (state) => ({
  authorizedUserEmail: getAuthorizedUserEmail(state),
  isAuthorized: getIsAuthorized(state),
  isFetching: getIsFetching(state),
});
export default connect(mapStateToProps, { logout })(Header);