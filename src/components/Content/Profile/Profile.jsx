import React from 'react';
import './Profile.css';
import { UserContainer } from './User/User';
import { MyPosts } from './MyPosts/MyPosts';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileData } from '../../../redux/profilePageReducer';
import { useLocation, useParams } from 'react-router-dom';

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
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + this.props.params.userId)
        .then(response => {
          this.props.setProfileData(response.data);
        }).catch(() => {
          // this.props.setProfileData({
          //   userId: 10,
          //   photos: {
          //     small: '../img/user-ava.jpg',
          //   },
          //   fullName: 'Andrey Makarevich',
          //   aboutMe: 'About me!!!',
          //   lookingForAJob: true,
          //   lookingForAJobDescription: 'looking for a new job',
          //   contacts: {
          //     facebook: 'www.facebook.com',
          //     youtube: null,
          //     vk: 'vk.com/dimych'
          //   },
          // });
        });
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
  setProfileData
};
export default connect(null, mapDispatchToProps)(ProfileContainerWithRouter);
