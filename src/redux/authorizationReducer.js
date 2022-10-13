const SET_AUTHORIZED_USER_DATA = 'SET_AUTHORIZED_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialValue = {
  authorizedUserData: {
    login: null,
    id: null,
    email: null,
  },
  isAuthorized: false,
  isFetching: false,
};

const actors = {

  [SET_AUTHORIZED_USER_DATA]: (substate, action) => {
    return {
      ...substate,
      authorizedUserData: { ...action.authorizedUserData },
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

export const setAuthorizedUserData = ({ authorizedUserData, isAuthorized }) => ({ type: SET_AUTHORIZED_USER_DATA, authorizedUserData, isAuthorized });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });