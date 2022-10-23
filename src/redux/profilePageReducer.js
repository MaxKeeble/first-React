import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';

let initialValue = {
  avatarImgSrc: '../img/user-ava.jpg',

  profileData: {
    userId: 1,
    photos: {
      small: '../img/user-ava.jpg',
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
  // newPostText: '',
};

const actors = {

  [ADD_POST]: (substate, action) => {

    let obj = {
      imgSrc: 'https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256',
      text: action.newPostText,
      likeCount: '0'
    };

    let stateCopy = { ...substate };
    stateCopy.posts = [...substate.posts];

    stateCopy.posts.push(obj);

    return stateCopy;
  },

  [SET_PROFILE_DATA]: (substate, action) => {
    return { ...substate, profileData: { ...action.profileData, status: action.status } };
  },

  [SET_STATUS]: (substate, action) => {
    return { ...substate, profileData: { ...substate.profileData, status: action.newStatus } };
  },

};

const profilePageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default profilePageReducer;

// Action creators
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfileData = (profileData, status) => ({ type: SET_PROFILE_DATA, profileData, status });
export const setStatus = (newStatus) => ({ type: SET_STATUS, newStatus });

// Thunk creators
export const getProfile = (userId) => {
  return async (dispatch) => {
    const profileData = await profileAPI.getProfile(userId);
    const statusText = await profileAPI.getStatus(userId);
    dispatch(setProfileData(profileData, statusText));
  };
};
export const updateStatus = (newStatus) => {
  return (dispatch) => {
    if (newStatus.trim()) profileAPI.updateStatus(newStatus).then(response => {
      if (response.resultCode === 0) dispatch(setStatus(newStatus));
    });
  };
};