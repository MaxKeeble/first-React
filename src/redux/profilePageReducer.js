const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

let initialValue = {
  avatarImgSrc: '../img/user-ava.jpg',

  profileData: {
    userId: 1,
    photos: {
      small: '../img/user-ava.jpg',
    },
    fullName: 'Andrey Shchetnikov',
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
  newPostText: '',
};

const actors = {

  [ADD_POST]: (substate, action) => {
    let text = substate.newPostText;

    if (!text.trim()) return substate;

    let obj = {
      imgSrc: 'https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256',
      text,
      likeCount: '0'
    };

    let stateCopy = { ...substate };
    stateCopy.posts = [...substate.posts];

    stateCopy.posts.push(obj);
    stateCopy.newPostText = '';

    return stateCopy;
  },

  [UPDATE_POST_TEXT]: (substate, action) => {
    substate = { ...substate };
    substate.newPostText = action.text;
    return substate;
  },

  [SET_PROFILE_DATA]: (substate, action) => {
    return { ...substate, profileData: action.profileData };
  },

};

const profilePageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default profilePageReducer;


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (textareaText) => ({ type: UPDATE_POST_TEXT, text: textareaText });
export const setProfileData = (profileData) => ({ type: SET_PROFILE_DATA, profileData });
