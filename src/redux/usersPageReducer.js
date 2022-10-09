const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ADD_USERS = 'ADD_USERS';

let initialValue = {
  users: [
    // {
    //   id: 1,
    //   avatarUrl: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1',
    //   isFollowed: false,
    //   fullname: 'Denis',
    //   status: 'I`m a boss',
    //   location: {
    //     city: 'Uralsk',
    //     country: 'Kazakhstan',
    //   },
    // }, {
    //   id: 2,
    //   avatarUrl: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1',
    //   isFollowed: false,
    //   fullname: 'Vova',
    //   status: 'I`m with Denis',
    //   location: {
    //     city: 'Uralsk',
    //     country: 'Kazakhstan',
    //   },
    // }, {
    //   id: 3,
    //   avatarUrl: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1',
    //   isFollowed: true,
    //   fullname: 'Lena',
    //   status: 'I`m a cookboss',
    //   location: {
    //     city: 'Dimitrovgrad',
    //     country: 'Russia',
    //   },
    // }, {
    //   id: 4,
    //   avatarUrl: 'https://avatars.mds.yandex.net/i?id=4686dcc4f6439a70eab782cca25cc645-5886109-images-thumbs&n=13&exp=1',
    //   isFollowed: true,
    //   fullname: 'Larisa',
    //   status: 'I`m the best',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia',
    //   },
    // },
  ],
};

const actors = {

  [FOLLOW]: (substate, action) => {
    return {
      ...substate,
      users: substate.users.map(user => {
        if (user.id === action.userId) {
          user = { ...user, followed: true };
        }
        return user;
      })
    };
  },

  [UNFOLLOW]: (substate, action) => {
    return {
      ...substate,
      users: substate.users.map(user => {
        if (user.id === action.userId) {
          user = { ...user, followed: false };
        }
        return user;
      })
    };
  },

  [SET_USERS]: (substate, action) => {
    return { ...substate, users: action.users };
  },

  [ADD_USERS]: (substate, action) => {
    return { ...substate, users: [...substate.users, ...action.users] };
  }

};

const usersPageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default usersPageReducer;

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const addUsersActionCreator = (users) => ({ type: ADD_USERS, users });
