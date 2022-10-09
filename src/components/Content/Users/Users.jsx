import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../../redux/usersPageReducer";
import styles from "./Users.module.css";
import defaultPhoto from "../../../assets/images/defaultPhoto.jpg";

export class Users extends React.Component {
  constructor(props) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
    })
  }

  render() {
    return (
      <div>
        <h2 className={styles.title}>Users</h2>
        <ul>
          {
            this.props.users.map(user => (
              <li className={styles.user} key={user.id}>
                <div className={styles.left} >
                  <img className={styles.image} src={user.photos.large || user.photos.small || defaultPhoto} alt="Avatar" />
                  {user.followed ?
                    <button className={styles.button} onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                    <button className={styles.button + ' ' + styles.followed} onClick={() => this.props.follow(user.id)}>Follow</button>}
                </div>
                <div className={styles.userInfo} >
                  <div className={styles.fullname}>{user.name}</div>
                  <div className={styles.status}>{user.status || ''}</div>
                  <div className={styles.location}>
                    <div className={styles.country}>{user.location?.country || 'Country'},</div>
                    <div className={styles.city}>{user.location?.city || 'City'}</div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state, myProps) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch, myProps) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);