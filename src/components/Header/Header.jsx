import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthorizedUserData, setIsFetching } from '../../redux/authorizationReducer';
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
            ? <span className='header__login-link'> You authorized: {props.authorizedUserData.login}</span>
            : <span className='header__login-link'>Login</span>)
      }
    </header>
  )
}

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isAuthorized) {
      this.props.setIsFetching(true);
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      }).then(response => {
        this.props.setIsFetching(false);
        if (response.data.resultCode === 0) this.props.setAuthorizedUserData({ authorizedUserData: response.data.data, isAuthorized: true });
      }).catch(() => {
        this.props.setIsFetching(false);
      });
    }
  }

  render() {
    return <Header {...this.props} />;
  };
}

const mapStateToProps = (state) => ({
  authorizedUserData: state.authorization.authorizedUserData,
  isAuthorized: state.authorization.isAuthorized,
  isFetching: state.authorization.isFetching,
});

export default connect(mapStateToProps, { setAuthorizedUserData, setIsFetching })(HeaderContainer);