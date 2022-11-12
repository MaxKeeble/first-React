// import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './ProfileInfo.css';
import defaultPhoto from '../../../../assets/images/defaultPhoto.jpg';
import { displayMainUserData, getDisplayedUserData, getIsFetching, getMainUserId, savePhoto, saveUserData, selectorGetDisplayedUserData, updateStatus } from '../../../../redux/profilePageReducer';
import { Preloader } from '../../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { EditIcon } from '../../../common/SVG/EditIcon';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileForm } from './ProfileForm/ProfileForm';


const ProfileInfo = ({ profileData, updateStatus, contacts, savePhoto, isMyOwn, saveUserData }) => {

  const [editMode, setEditMode] = useState(false);

  function onSubmit(data, form, callback) {
    saveUserData(data, form, callback);
    // setEditMode(false);
  }

  function goBack() {
    setEditMode(false);
  }

  const onMyPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="user">
      <img className='user__banner' src="https://klike.net/uploads/posts/2019-07/1562069960_6.jpg" alt="banner" />

      <div className='user__avatar-wrapper'>
        <img className='user__avatar' src={profileData?.photos?.large || profileData?.photos?.small || defaultPhoto} alt="avatar" />
        {isMyOwn && <label className='user__edit-avatar-label'>
          <input className='user__edit-avatar-input' type="file" onChange={onMyPhoto} accept="image/*" />
          <EditIcon className='user__edit-avatar-icon' />
        </label>}
      </div>

      {editMode
        ? <ProfileForm {...{ profileData, updateStatus, onSubmit, goBack }} />
        : <ProfileDescription {...{ profileData, updateStatus, contacts, isMyOwn }} />
      }

      {!editMode && isMyOwn && <button className='user__edit-btn' onClick={() => { setEditMode(true) }}>Edit</button>}
    </div>
  )
};

const ProfileInfoContainer = ({
  profileData,
  mainUserId,
  updateStatus,
  params,
  getProfile,
  displayMainUserData,
  isFetching,
  savePhoto,
  saveUserData }) => {

  let isMyOwn = profileData.userId === mainUserId;

  let [isFirstCall, setIsFirstCall] = useState(true);

  if (isFirstCall) {
    if (params.userId) getProfile(params.userId);
    setIsFirstCall(false);
  }

  useEffect(() => {
    if (!params.userId && !isFetching) displayMainUserData();
  }, [params.userId, displayMainUserData, isFetching]);

  if (isFetching) return <Preloader />;


  const contacts = [];
  for (const key in profileData.contacts) {
    if (profileData.contacts[key]) {
      contacts.push(<li key={key}>
        <span className='contact-type'>{key}: </span>
        <a className='contact-link' href={'http://' + profileData.contacts[key]}>
          {profileData.contacts[key]}
        </a>
      </li>);
    }
  }

  return <ProfileInfo {...{ profileData, isMyOwn, updateStatus, contacts, savePhoto, saveUserData }} />;
}

let ProfileInfoWithRouter = (props) => {
  let location = useLocation();
  let params = useParams();
  return <ProfileInfoContainer {...props} location={location} params={params} />;
};


let mapStateToProps = (state) => {
  return {
    profileData: selectorGetDisplayedUserData(state),
    isFetching: getIsFetching(state),
    mainUserId: getMainUserId(state),
  }
};
let mapDispatchToProps = {
  getProfile: getDisplayedUserData,
  displayMainUserData,
  updateStatus,
  savePhoto,
  saveUserData
};
export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(ProfileInfoWithRouter);