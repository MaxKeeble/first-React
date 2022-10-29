import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useParams } from 'react-router-dom';
import './Profile.css';
import { UserDescriptionContainer } from './User/UserDescription';
import { MyPosts } from './MyPosts/MyPosts';
import { displayMainUserData, getDisplayedUserData } from '../../../redux/profilePageReducer';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { Preloader } from '../../common/Preloader/Preloader';

function Profile() {
  return (
    <div className='content__profile'>
      <UserDescriptionContainer />
      <MyPosts />
    </div>
  )
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.params.userId) this.props.getProfile(this.props.params.userId);
  }

  render() {
    if (!this.props.params.userId) this.props.displayMainUserData();

    if (this.props.isFetching) return <Preloader />;
    return <Profile />;
  }
};

let ProfileContainerWithRouter = (props) => {
  let location = useLocation();
  let params = useParams();
  return <ProfileContainer {...props} location={location} params={params} />;
};


let mapStateToProps = (state) => ({
  isFetching: state.profilePage.isFetching,
});
let mapDispatchToProps = {
  getProfile: getDisplayedUserData,
  displayMainUserData
};

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(ProfileContainerWithRouter);