import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./User.module.css";
import defaultPhoto from "../../../../assets/images/defaultPhoto.jpg";

export function User({follow, unfollow, userData}) {
  return (
    <div className={styles.user}>
      <div className={styles.left} >
        <NavLink to={'/profile/' + userData.id}>
          <img className={styles.image} src={userData.photos.large || userData.photos.small || defaultPhoto} alt="Avatar" />
        </NavLink>

        
        {userData.followed

          ? <button className={styles.button} disabled={userData.isFollowingFetching} onClick={() => {
            unfollow(userData.id);
          }}>Unfollow</button>

          : <button className={styles.button + ' ' + styles.followed} disabled={userData.isFollowingFetching} onClick={() => {
            follow(userData.id);
          }}>Follow</button>}

      </div>
      <div className={styles.userInfo} >
        <div className={styles.fullname}>{userData.name}</div>
        <div className={styles.status}>{userData.status || ''}</div>
        <div className={styles.location}>
          <div className={styles.country}>{userData.location?.country || 'Country'},</div>
          <div className={styles.city}>{userData.location?.city || 'City'}</div>
          <div>{userData.id}</div>
        </div>
      </div>
    </div>
  );
};