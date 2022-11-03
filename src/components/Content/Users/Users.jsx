import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, getIsFetching, getPageSize, getUsers, getUsersCount, selectorGetUsers, setIsFetching, setUsers, setUsersCount, unfollow } from "../../../redux/usersPageReducer";
import styles from "./Users.module.css";
import { Preloader } from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { Pagination } from '../../common/Pagination/Pagination';
import { User } from './User/User';

function Users(props) {
  const { pagesNumber, currentPageNumber, users, follow, unfollow } = props;

  return (
    <div>

      <Pagination pagesNumber={pagesNumber} currentPageNumber={currentPageNumber} />

      <h2 className={styles.title}>Users</h2>

      <ul>
        {
          users.map(userData => {
            return <li key={userData.id}>
              <User {...{
                follow,
                unfollow,
                userData
              }} />
            </li>
          }
          )
        }
      </ul>
    </div>
  );
}

const UsersAPIContainer = (props) => {
  const {
    getUsers,
    pageSize,
    users,
    usersCount,
    isFetching,
    unfollow,
    follow,
  } = props;

  let currentPageNumber = useParams().currentPageNumber || '1';
  useEffect(() => {
    getUsers(currentPageNumber, pageSize);
  }, [getUsers, currentPageNumber, pageSize]);

  let pagesNumber = Math.ceil(usersCount / pageSize);
  pagesNumber = Math.min(pagesNumber, 25);

  return <>
  
    {isFetching && <Preloader />}

    <Users
      {...{
        pagesNumber,
        currentPageNumber,
        users,
        unfollow,
        follow,
      }}
    />
  </>;
};


let mapStateToProps = (state) => {
  return {
    users: selectorGetUsers(state),
    pageSize: getPageSize(state),
    usersCount: getUsersCount(state),
    isFetching: getIsFetching(state),
  };
};
let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setIsFetching,
  getUsers,
};
export const UsersContainer = compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(UsersAPIContainer);