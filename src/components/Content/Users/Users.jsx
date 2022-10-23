import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, getUsers, setCurrentPageNumber, setIsFetching, setUserFollowingFetching, setUsers, setUsersCount, unfollow } from "../../../redux/usersPageReducer";
import styles from "./Users.module.css";
import defaultPhoto from "../../../assets/images/defaultPhoto.jpg";
import { Preloader } from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';

function Users(props) {

  let paginationButtons = new Array(props.pagesNumber).fill(0).map((el, index) => {
    return (index + 1) === props.currentPageNumber
      ? (<button className={styles.paginationBTN + ' ' + styles.active} key={index}>{index + 1}</button>)
      : (<button className={styles.paginationBTN} key={index} onClick={(e) => { props.onPageChanged(index + 1) }}>{index + 1}</button>);
  });

  return (
    <div>
      <div>
        {paginationButtons}
      </div>
      <h2 className={styles.title}>Users</h2>
      <ul>
        {
          props.users.map(user => {
            return <li className={styles.user} key={user.id}>
              <div className={styles.left} >
                <NavLink to={'/profile/' + user.id}>
                  <img className={styles.image} src={user.photos.large || user.photos.small || defaultPhoto} alt="Avatar" />
                </NavLink>
                {user.followed

                  ? <button className={styles.button} disabled={user.isFollowingFetching} onClick={() => {
                    props.unfollow(user.id);
                  }}>Unfollow</button>

                  : <button className={styles.button + ' ' + styles.followed} disabled={user.isFollowingFetching} onClick={() => {
                    props.follow(user.id);
                  }}>Follow</button>}

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
            </li>;
          }
          )
        }
      </ul>
    </div>
  );
}

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPageNumber, this.props.pageSize);
  }

  onPageChanged(currentPageNumber) {
    this.props.getUsers(currentPageNumber, this.props.pageSize);
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
        follow={this.props.follow}
        setUserFollowingFetching={this.props.setUserFollowingFetching} />
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
//       dispatch(follow(userId));
//     },
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
// thunkCreator: (...args)=>{
//   dispatch(thunkCreator(...args));
// },
// getUsers: (...args)=>{
//   dispatch(getUsers(...args));
// }
//   };
// };
let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPageNumber,
  setUsersCount,
  setIsFetching,
  setUserFollowingFetching,
  getUsers,
};

// export let UsersContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer));
export let UsersContainer = compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(UsersAPIContainer);