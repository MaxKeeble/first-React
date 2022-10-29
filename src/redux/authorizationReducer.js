import { authorizationAPI } from "../api/api";

const SET_AUTHORIZED_USER_DATA = 'SET_AUTHORIZED_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING_FOR_AUTHORIZATION';

let initialValue = {
  authorizedUserData: {
    login: null,
    id: null,
    email: null,
  },
  isAuthorized: false,
  isFetching: true,
};

const actors = {

  [SET_AUTHORIZED_USER_DATA]: (substate, action) => {
    return {
      ...substate,
      authorizedUserData: { ...substate.authorizedUserData, ...(action.authorizedUserData || {}) },
      isAuthorized: action.isAuthorized,
    };
  },

  [SET_IS_FETCHING]: (substate, action) => {
    return {
      ...substate,
      isFetching: action.isFetching,
    };
  },

};

const authorizationReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default authorizationReducer;

// Action creators
export const setAuthorizedUserData = ({ authorizedUserData, isAuthorized }) => ({ type: SET_AUTHORIZED_USER_DATA, authorizedUserData, isAuthorized });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

// Thunk creators
export const checkAuthorization = () => {

  return (dispatch) => {
    dispatch(setIsFetching(true));
    let promise = authorizationAPI.me();
    promise.then(data => {
      if (data.resultCode === 0) dispatch(setAuthorizedUserData({ authorizedUserData: data.data, isAuthorized: true }));
    }).finally(() => {
      dispatch(setIsFetching(false));
    });
    return promise;
  };
};

export const authorize = (loginData, _, __, resolve) => {
  return (dispatch) => {
    authorizationAPI.login(loginData).then(data => {
      console.log('data: ', data);
      if (data.resultCode === 0) {
        dispatch(setAuthorizedUserData({ authorizedUserData: { email: loginData.email, id: data.data.userId }, isAuthorized: true }));
        resolve();
      }
      else resolve(data.messages.join('. '));
    }).catch(console.log);
  };
};

export const logout = () => {
  return (dispatch) => {
    authorizationAPI.logout().then(data => {
      if (data.resultCode === 0) dispatch(setAuthorizedUserData({ authorizedUserData: { email: null, id: null }, isAuthorized: false }));
    });
  };
};