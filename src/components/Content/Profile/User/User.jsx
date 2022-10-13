// import React from 'react';
import './User.css';
import defaultPhoto from '../../../../assets/images/defaultPhoto.jpg';
import { connect } from 'react-redux';

export function User({ profileData }) {
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

  return (
    <div className="user">
      <img className='user__banner' src="https://klike.net/uploads/posts/2019-07/1562069960_6.jpg" alt="banner" />
      <img className='user__avatar' src={profileData?.photos?.small || defaultPhoto} alt="avatar" />
      <div className="user-description ud">
        <h2 className="ud__name">{profileData.fullName}</h2>
        <div className="ud__about">{'Обо мне: ' + (profileData.aboutMe || '-')}</div>
        {
          profileData.lookingForAJob ?
            <div className="ud__job">
              <span className="job__is-looking is-looking">Ищу работу: </span>
              <span className="job__descrition">{profileData.lookingForAJobDescription}</span>
            </div> :
            <div className="ud__job">
              <span className="job__is-looking">Не ищу работу</span>
            </div>
        }
        {
          contacts.length > 0 && <ul>
            {contacts}
          </ul>
        }

      </div>
    </div>
  )
};

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData
  }
};

export let UserContainer = connect(mapStateToProps)(User);