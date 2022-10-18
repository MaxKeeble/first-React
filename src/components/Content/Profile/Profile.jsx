import React from 'react';
import './Profile.css';
import { UserContainer } from './User/User';
import { MyPosts } from './MyPosts/MyPosts';
import { connect } from 'react-redux';
import { getProfile } from '../../../redux/profilePageReducer';
import { useLocation, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';

function Profile() {
  return (
    <div className='content__profile'>
      <UserContainer />
      <MyPosts />
    </div>
  )
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.params.userId) {
      getProfile(this.props.params.userId);
    }
  }

  render() {
    return <Profile />;
  }
};

let ProfileContainerWithRouter = (props) => {
  let location = useLocation();
  let params = useParams();
  return <ProfileContainer {...props} location={location} params={params} />;
};

let mapDispatchToProps = {
  getProfile,
};
export default withAuthRedirect(connect(null, mapDispatchToProps)(ProfileContainerWithRouter));