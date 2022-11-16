import { authorizationAPI, securityAPI } from "../api/api";
import { getMainUserData, setIsFetching as setIsFetchingProfile } from "./profilePageReducer";

const SET_AUTHORIZED_USER_DATA = 'SET_AUTHORIZED_USER_DATA';
const SET_IS_FETCHING_AUTH = 'AUTHORIZATION/SET_IS_FETCHING';
const SET_CAPTCHA_URL = 'AUTHORIZATION/SET_CAPTCHA_URL';

let initialValue = {
  authorizedUserData: {
    login: null,
    id: null,
    email: null,
  },
  captchaUrl: null,
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

  [SET_IS_FETCHING_AUTH]: (substate, action) => {
    return {
      ...substate,
      isFetching: action.isFetching,
    };
  },

  [SET_CAPTCHA_URL]: (substate, action) => {
    return {
      ...substate,
      captchaUrl: action.captchaUrl,
    };
  },

};

const authorizationReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default authorizationReducer;


// Action creators
export const setAuthorizedUserData = ({ authorizedUserData, isAuthorized }) => ({ type: SET_AUTHORIZED_USER_DATA, authorizedUserData, isAuthorized });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING_AUTH, isFetching });
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });


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
  console.log('loginData, _, __, resolve: ', loginData, _, __, resolve);
  return (dispatch) => {
    authorizationAPI.login(loginData).then(data => {
      if (data.resultCode === 0) {
        dispatch(setIsFetchingProfile(true));
        dispatch(getMainUserData(data.data.userId));
        dispatch(setAuthorizedUserData({ authorizedUserData: { email: loginData.email, id: data.data.userId }, isAuthorized: true }));
        dispatch(setCaptchaUrl(null));
        resolve();
      }
      else {
        if (data.resultCode === 10) {
          dispatch(getCaptchaUrl());
        }
        resolve(data.messages.join('. '));
      }
    }).catch((error) => {
      console.log(error);
      resolve(error);
    });
  };
};
export const getCaptchaUrl = () => async (dispatch) => {
  const responseData = await securityAPI.getCaptchaUrl();
  const captchaUrl = responseData.url;

  dispatch(setCaptchaUrl(captchaUrl));
};
export const logout = () => {
  return async (dispatch) => {
    let data = await authorizationAPI.logout();
    if (data.resultCode === 0) dispatch(setAuthorizedUserData({ authorizedUserData: { email: null, id: null }, isAuthorized: false }));
  };
};


// Authorization-selectors
export const getIsAuthorized = (state) => {
  return state.authorization.isAuthorized;
};
export const getAuthorizedUserEmail = (state) => {
  return state.authorization.authorizedUserData.email;
};
export const getIsFetching = (state) => {
  return state.authorization.isFetching;
};
export const selectorGetCaptchaUrl = (state) => {
  return state.authorization.captchaUrl;
};