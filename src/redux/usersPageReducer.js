import { createSelector } from "reselect";
import { usersAPI } from "../api/api";
import { findAndPatchObject } from "../utils/utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING_FOR_USERS_PAGE';
const SET_USER_FOLLOWING_FETCHING = 'SET_USER_FOLLOWING_FETCHING';

let initialValue = {
  users: [
    {
      id: 1,
      photos: { small: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1' },
      followed: false,
      name: 'Denis',
      status: 'I`m a boss',
      location: {
        city: 'Uralsk',
        country: 'Kazakhstan',
      },
      isFollowingFetching: false,
    }, {
      id: 2,
      photos: { small: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1' },
      followed: false,
      name: 'Vova',
      status: 'I`m with Denis',
      location: {
        city: 'Uralsk',
        country: 'Kazakhstan',
      },
    }, {
      id: 3,
      photos: { small: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1' },
      followed: true,
      name: 'Lena',
      status: 'I`m a cookboss',
      location: {
        city: 'Dimitrovgrad',
        country: 'Russia',
      },
    }, {
      id: 4,
      photos: { small: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1' },
      followed: true,
      name: 'Larisa',
      status: 'I`m the best',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
    },
  ],
  pageSize: 5,
  usersCount: 20,
  isFetching: false,
};

const actors = {

  [FOLLOW]: (substate, action) => {
    return {
      ...substate,
      users: findAndPatchObject(substate.users, { id: action.userId }, { followed: true }),
    };
  },

  [UNFOLLOW]: (substate, action) => {
    return {
      ...substate,
      users: findAndPatchObject(substate.users, { id: action.userId }, { followed: false }),
    };
  },

  [SET_USERS]: (substate, action) => {
    return { ...substate, users: action.users.map(user => ({ ...user, isFollowingFetching: false })) };
  },

  [ADD_USERS]: (substate, action) => {
    return { ...substate, users: [...substate.users, ...action.users.map(user => ({ ...user, isFollowingFetching: false }))] };
  },

  [SET_USERS_COUNT]: (substate, action) => {
    return { ...substate, usersCount: action.usersCount };
  },

  [SET_IS_FETCHING]: (substate, action) => {
    return { ...substate, isFetching: action.isFetching };
  },

  [SET_USER_FOLLOWING_FETCHING]: (substate, action) => {
    return {
      ...substate,
      users: findAndPatchObject(substate.users, { id: action.userId }, { isFollowingFetching: action.isFetching }),
    };
  },

};

const usersPageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default usersPageReducer;

// Action creators
export const followAccept = (userId) => ({ type: FOLLOW, userId });
export const unfollowAccept = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const addUsers = (users) => ({ type: ADD_USERS, users });
export const setUsersCount = (usersCount) => ({ type: SET_USERS_COUNT, usersCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setUserFollowingFetching = (isFetching, id) => ({ type: SET_USER_FOLLOWING_FETCHING, isFetching, id });


// Thunk creators
export const getUsers = (currentPageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getPage(currentPageNumber, pageSize).then(data => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    }).catch(() => {
      dispatch(setIsFetching(false));
    });
  };
};
export const follow = (id) => {
  return (dispatch) => {
    dispatch(setUserFollowingFetching(true, id));
    usersAPI.follow(id).then(data => {
      dispatch(setUserFollowingFetching(false, id));
      if (data.resultCode === 0) dispatch(followAccept(id));
    }).catch(() => dispatch(setUserFollowingFetching(false, id)));
  };
};
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(setUserFollowingFetching(true, id));
    usersAPI.unfollow(id).then(data => {
      dispatch(setUserFollowingFetching(false, id));
      if (data.resultCode === 0) dispatch(unfollowAccept(id));
    }).catch(() => dispatch(setUserFollowingFetching(false, id)));
  };
};


// Users-selectors
export const selectorGetUsers = (state) => {
  return state.usersPage.users;
};
export const superSelectorGetUsers = createSelector(selectorGetUsers, users => {
  return users.filter(user => user.followed);
});
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getUsersCount = (state) => {
  return state.usersPage.usersCount;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};