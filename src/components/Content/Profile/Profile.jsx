import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useParams } from 'react-router-dom';
import './Profile.css';
import { UserDescriptionContainer } from './User/UserDescription';
import { MyPosts } from './MyPosts/MyPosts';
import { getProfile } from '../../../redux/profilePageReducer';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';

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
    const userId = this.props.params.userId || 26244;
    this.props.getProfile(userId);
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

// export default withAuthRedirect(connect(null, mapDispatchToProps)(ProfileContainerWithRouter));
export default compose(withAuthRedirect, connect(null, mapDispatchToProps))(ProfileContainerWithRouter);
