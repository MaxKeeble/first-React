const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialValue = {
  avatarImgSrc: '../img/user-ava.jpg',
  posts: [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
      likeCount: '10'
    }, {
      text: 'Hello, Vova!!!',
      likeCount: '8'
    }, {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
      likeCount: '28'
    }, {
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

    substate.posts.push(obj);
    substate.newPostText = '';
    return substate;
  },

  [UPDATE_POST_TEXT]: (substate, action) => {
    substate.newPostText = action.text;
    return substate;
  }

};

const profilePageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default profilePageReducer;