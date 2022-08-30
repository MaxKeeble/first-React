import render from '../render';

const state = {
  friendsList: [
    { id: 'id1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
    { id: 'id2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
    { id: 'id3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
    { id: 'id4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
  ],
  content: {
    profilePage: {
      posts: [
        {
          imgSrc: "https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256",
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
          likeCount: '10'
        }, {
          imgSrc: "https://www.shareicon.net/data/2016/07/05/791219_man_512x512.png",
          text: 'Hello, Vova!!!',
          likeCount: '8'
        }, {
          imgSrc: "https://i.pinimg.com/236x/8d/4d/58/8d4d58f0f98b880e795e2fb3139bf01a.jpg",
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
          likeCount: '28'
        }, {
          imgSrc: "https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256",
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
          likeCount: '222'
        },
      ],
    },
    messagesPage: {
      dialogs: [
        { id: 'id1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
        { id: 'id2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
        { id: 'id3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
        { id: 'id4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
      ],
      messages: [
        { id: '1', message: 'Hi!', side: 'left' },
        { id: '2', message: 'Hello!!', side: 'right' },
        { id: '3', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', side: 'left' },
        { id: '3', message: 'Velit dolores voluptate vero, iste sapiente hic molestias et temporibus error adipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'left' },
        { id: '4', message: 'Totam, omnis. Radipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'right' },
        { id: '5', message: 'Hitman', side: 'right' },
        { id: '6', message: 'Hitachi', side: 'left' },
      ],
    },
  },
};

export default state;

export function addPost(text) {
  let obj = {
    imgSrc: "https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256",
    text,
    likeCount: '0'
  };

  state.content.profilePage.posts.push(obj);

  render();
};