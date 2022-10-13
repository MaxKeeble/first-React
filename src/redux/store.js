// import profilePageReducer from "./profilePageReducer";
// import messagesPageReducer from "./messagesPageReducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

// let store = {

//   _state: {
//     friendsList: [
//       { id: 'id1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
//       { id: 'id2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
//       { id: 'id3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
//       { id: 'id4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
//     ],
//     content: {
//       profilePage: {
//         avatarImgSrc: '../img/user-ava.jpg',
//         posts: [
//           {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
//             likeCount: '10'
//           }, {
//             text: 'Hello, Vova!!!',
//             likeCount: '8'
//           }, {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
//             likeCount: '28'
//           }, {
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
//             likeCount: '222'
//           },
//         ],
//         newPostText: '',
//       },
//       messagesPage: {
//         dialogs: [
//           { id: 'id1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
//           { id: 'id2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
//           { id: 'id3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
//           { id: 'id4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
//         ],
//         messages: [
//           { id: '1', message: 'Hi!', side: 'left' },
//           { id: '2', message: 'Hello!!', side: 'right' },
//           { id: '3', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', side: 'left' },
//           { id: '3', message: 'Velit dolores voluptate vero, iste sapiente hic molestias et temporibus error adipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'left' },
//           { id: '4', message: 'Totam, omnis. Radipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'right' },
//           { id: '5', message: 'Hitman', side: 'right' },
//           { id: '6', message: 'Hitachi', side: 'left' },
//         ],
//         newMessageText: '',
//       },
//     },
//   },

//   getState() { return this._state; },

//   _render: () => { console.log('%cRender is not assigned!', 'color:#900; font-weight:900') },

//   assignRender(f) {
//     this._render = f;
//   },

//   dispatch(action) {
//     this._state.content.profilePage = profilePageReducer(this._state.content.profilePage, action);
//     this._state.content.messagesPage = messagesPageReducer(this._state.content.messagesPage, action);
//     this._render();
//   },
// };


// window.messages = store._state.content.messagesPage.messages;
// export default store;