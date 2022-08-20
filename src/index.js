import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const postsData = [
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
  },{
    imgSrc: "https://lh5.googleusercontent.com/-_2HAOUf_Sg4/AAAAAAAAAAI/AAAAAAAAAEs/Tl3ETkKaEGI/photo.jpg?sz=256",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni dolor molestias nostrum veniam ea doloribus quas officiis assumenda porro, autem provident a eaque nam. orem ipsum dolor sit amet consectetur adipisicing elit.',
    likeCount: '222'
  },
];
const data ={
  content:{
    profile:{
      myPosts:{
        postsList: postsData
      }
    }
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);
