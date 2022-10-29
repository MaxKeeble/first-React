import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/authorizationReducer';
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
              <span className='header__login-span'> You authorized: {props.authorizedUserData.email}</span>
              <button className='header__logout-BTN' onClick={props.logout}>Logout</button>
            </div>)
            : <a href='/' className='header__login-link'>Login</a>)
      }
    </header>
  )
}

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   if (!this.props.isAuthorized) {
  //     this.props.checkAuthorization();
  //   }
  // }

  render() {
    return <Header {...this.props} />;
  };
}

const mapStateToProps = (state) => ({
  authorizedUserData: state.authorization.authorizedUserData,
  isAuthorized: state.authorization.isAuthorized,
  isFetching: state.authorization.isFetching,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);