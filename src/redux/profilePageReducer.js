import { profileAPI } from "../api/api";
import {makeErrorsObject} from "../utils/utils";

const ADD_POST = 'ADD_POST';
const SET_MAIN_USER_DATA = 'SET_MAIN_USER_DATA';
const DISPLAY_MAIN_USER_DATA = 'DISPLAY_MAIN_USER_DATA';
const SET_DISPLAYED_USER_DATA = 'SET_DISPLAYED_USER_DATA';
const SET_STATUS = 'SET_STATUS';
const SET_IS_FETCHING = 'PROFILE_PAGE/SET_IS_FETCHING';
const SAVE_PHOTO_SUCCESS = 'PROFILE_PAGE/SAVE_PHOTO_SUCCESS';

let initialValue = {
  avatarImgSrc: '../img/user_ava.jpg',

  displayedUserData: null,

  mainUserData: {
    userId: 1,
    photos: {
      small: '../img/user_ava.jpg',
    },
    fullName: 'Andrey Shchetnikov',
    status: '0-0',
    aboutMe: 'About me',
    lookingForAJob: true,
    lookingForAJobDescription: 'looking for a good job',
    contacts: {
      facebook: 'www.facebook.com',
      youtube: null,
      vk: 'vk.com/dimych'
    },
  },

  posts: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
      likeCount: '10'
    }, {
      id: 2,
      text: 'Hello, Vova!!!',
      likeCount: '8'
    }, {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
      likeCount: '28'
    }, {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
      likeCount: '222'
    },
  ],

  isFetching: false,
};

const actors = {

  [ADD_POST]: (substate, action) => {
    let lastId = substate.posts.at(-1).id;
    let obj = {
      id: lastId + 1,
      imgSrc: 'https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256',
      text: action.newPostText,
      likeCount: '0'
    };

    let stateCopy = { ...substate };
    stateCopy.posts = [...substate.posts];

    stateCopy.posts.push(obj);

    return stateCopy;
  },

  [SET_MAIN_USER_DATA]: (substate, action) => {
    return { ...substate, mainUserData: { ...action.mainUserData, status: action.status } };
  },
  [DISPLAY_MAIN_USER_DATA]: (substate, action) => {
    return { ...substate, displayedUserData: substate.mainUserData };
  },
  [SET_DISPLAYED_USER_DATA]: (substate, action) => {
    return { ...substate, displayedUserData: { ...action.displayedUserData, status: action.status } };
  },

  [SET_STATUS]: (substate, action) => {
    return { ...substate, mainUserData: { ...substate.mainUserData, status: action.newStatus } };
  },

  [SET_IS_FETCHING]: (substate, action) => {
    return { ...substate, isFetching: action.isFetching };
  },

  [SAVE_PHOTO_SUCCESS]: (substate, action) => {
    return {
      ...substate,
      displayedUserData: { ...substate.displayedUserData, photos: action.photos },
      mainUserData: { ...substate.mainUserData, photos: action.photos }
    };
  },

};

const profilePageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default profilePageReducer;

// Action creators
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setMainUserData = (mainUserData, status) => ({ type: SET_MAIN_USER_DATA, mainUserData, status });
export const setDisplayedUserData = (displayedUserData, status) => ({ type: SET_DISPLAYED_USER_DATA, displayedUserData, status });
export const displayMainUserData = () => ({ type: DISPLAY_MAIN_USER_DATA });
export const setStatus = (newStatus) => ({ type: SET_STATUS, newStatus });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });


// Thunk creators
export const getMainUserData = (userId) => {
  return async (dispatch) => {
    const [mainUserData, statusText] = await Promise.all([profileAPI.getProfile(userId), profileAPI.getStatus(userId)]);
    console.log('mainUserData: ', mainUserData);
    dispatch(setMainUserData(mainUserData, statusText));
    dispatch(displayMainUserData());
    dispatch(setIsFetching(false));
  };
};
export const getDisplayedUserData = (userId) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const displayedUserData = await profileAPI.getProfile(userId);
    const statusText = await profileAPI.getStatus(userId);
    dispatch(setDisplayedUserData(displayedUserData, statusText));

    dispatch(setIsFetching(false));
  };
};
export const updateStatus = (newStatus) => {
  return async (dispatch) => {
    if (newStatus?.trim()) {
      let response = await profileAPI.updateStatus(newStatus);
      if (response.resultCode === 0) {
        dispatch(setStatus(newStatus));
        dispatch(displayMainUserData());
      };
    };
  };
};
export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    };
  };
};
export const saveUserData = (data, form, callback) => {
  return async (dispatch, getState) => {
    let responseData = await profileAPI.saveUserData(data);

    if (responseData.resultCode === 0) {
      dispatch(getMainUserData(data.userId));
      callback();
    }
    else {
      callback(makeErrorsObject(responseData.messages));
    }
  };
};


// Profile-selectors
export const getIsFetching = (state) => {
  return state.profilePage.isFetching;
};
export const getMainUserId = (state) => {
  return state.profilePage.mainUserData.userId;
};
export const selectorGetDisplayedUserData = (state) => {
  return state.profilePage.displayedUserData;
};
export const getPosts = (state) => {
  return [...state.profilePage.posts];
};
export const getAvatarImgSrc = (state) => {
  return state.profilePage.avatarImgSrc;
};