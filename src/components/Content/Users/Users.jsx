import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { follow, setCurrentPageNumber, setIsFetching, setUsers, setUsersCount, unfollow } from "../../../redux/usersPageReducer";
import styles from "./Users.module.css";
import defaultPhoto from "../../../assets/images/defaultPhoto.jpg";
import { Preloader } from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

function Users(props) {

  let paginationButtons = new Array(props.pagesNumber).fill(0).map((el, index) => {
    return <span className={(index + 1) === props.currentPageNumber ? styles.paginationBTN + ' ' + styles.active : styles.paginationBTN} key={index} onClick={(e) => { props.onPageChanged(index + 1) }}>{index + 1}</span>;
  });

  return (
    <div>
      <div>
        {paginationButtons}
      </div>
      <h2 className={styles.title}>Users</h2>
      <ul>
        {
          props.users.map(user => (
            <li className={styles.user} key={user.id}>
              <div className={styles.left} >
                <NavLink to={'/profile/' + user.id}>
                  <img className={styles.image} src={user.photos.large || user.photos.small || defaultPhoto} alt="Avatar" />
                </NavLink>
                {user.followed
                  ? <button className={styles.button} onClick={() => {
                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
                      headers: {
                        'API-KEY': 'a8e52779-c2d9-43fb-8b1d-c2561c3dbbfd',
                      },
                      withCredentials: true,
                    }).then(response => {
                      if (response.data.resultCode === 0) props.unfollow(user.id);
                    });
                  }}>Unfollow</button>

                  : <button className={styles.button + ' ' + styles.followed} onClick={() => {
                    axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {}, {
                      headers: {
                        'API-KEY': 'a8e52779-c2d9-43fb-8b1d-c2561c3dbbfd',
                      },
                      withCredentials: true,
                    }).then(response => {
                      if (response.data.resultCode === 0) props.follow(user.id);
                    });
                  }
                  }>Follow</button>}
              </div>
              <div className={styles.userInfo} >
                <div className={styles.fullname}>{user.name}</div>
                <div className={styles.status}>{user.status || ''}</div>
                <div className={styles.location}>
                  <div className={styles.country}>{user.location?.country || 'Country'},</div>
                  <div className={styles.city}>{user.location?.city || 'City'}</div>
                  <div>{user.id}</div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users', {
      params: {
        page: this.props.currentPageNumber,
        count: this.props.pageSize,
      }
    }).then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setUsersCount(response.data.totalCount);
    }).catch(() => {
      this.props.setIsFetching(false);
    });
  }

  onPageChanged(currentPageNumber) {
    this.props.setIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users', {
      params: {
        page: currentPageNumber,
        count: this.props.pageSize,
      }
    }).then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setUsersCount(response.data.totalCount);
    }).catch(() => {
      this.props.setIsFetching(false);
    });

    this.props.setCurrentPageNumber(currentPageNumber);
  }

  render() {
    let pagesNumber = Math.ceil(this.props.usersCount / this.props.pageSize);
    pagesNumber = Math.min(pagesNumber, 25);

    return <>
      {this.props.isFetching ? <Preloader /> : null}

      <Users
        pagesNumber={pagesNumber}
        currentPageNumber={this.props.currentPageNumber}
        onPageChanged={this.onPageChanged.bind(this)}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow} />
    </>
  }
}

let mapStateToProps = (state, myProps) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPageNumber: state.usersPage.currentPageNumber,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch, myProps) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPageNumber: (pageNumber) => {
//       dispatch(setCurrentPageNumberActionCreator(pageNumber));
//     },
//     setUsersCount: (usersCount) => {
//       dispatch(setUsersCountActionCreator(usersCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingActionCreator(isFetching));
//     },
//   };
// };

let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPageNumber,
  setUsersCount,
  setIsFetching,
};

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);