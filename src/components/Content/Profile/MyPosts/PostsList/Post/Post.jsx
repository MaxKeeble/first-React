// import React from 'react';
import './Post.css';

export function Post({ data }) {
  data.likeCount = data.likeCount || 0;
  return (
    <div className="post">
      <div className="post__content">
        <img className='post__avatar' src={data.imgSrc} alt="post avatar" />
        <p className="post__text">{data.text}</p>
      </div>
      <div className="like">
        <button className='like__button'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" width='15' display='block'>
          <g><path d="M979.9,631.6c0-33.9-13.7-59.8-36.1-74.8c13.6-7.8,35.9-46.6,35.9-80.9c-1.3-56.6-54.9-126.7-135.9-126.7l-214.5,0C666,247.1,659,137.6,612.9,64.1C585.2,19.9,551.8,10,528.7,10c-77.8,0-93.3,76.6-93.3,102.6c0,87.1-12.3,126.9-27.7,163.6c-12.1,23.7-73.8,111.1-149.9,111.1H115.1c-55.1,0-95.1,47.1-95,114.1l37,389.4c4.5,61.4,34,98.6,93.3,98.6c0,0,29.5,0.3,51.6,0.3c11.3,0,21.8-0.1,28-0.3c18.3-0.6,33.3-12.6,46.6-22.6c9.4-7.1,16.9-13.2,23.7-13.2c3,0,20.3,10.1,41.6,19.3c21.6,9.4,56,17.1,88.9,17.1h298.5c100,0,148.1-38.3,148.1-102.1c0-18.8-4.2-30-14.6-44.7c40.2-9.9,75.8-35.6,75.8-80.1c0-16.5-7.6-43.1-18-50C940.3,708,979.9,672.2,979.9,631.6z M181.5,916.3c-23,0-43.4-22.1-48.6-51.9L94.7,525.1c0-31,24.4-65,57.1-65v1.4l96,0.3v454c-4.7,0.4-9.4-2.1-12.1-1.8C217.8,914.6,181.9,916.3,181.5,916.3z M828.9,685.9c0,0-5.4,0-5.4,0l0.5,37c4.3,1.7,20.4,6.7,20.4,38.8c0,34.4-34.9,48.3-72.3,48.3h0.1l-0.7,35.3c15.2,3.5,20.7,17,20.6,38.7c0,37.9-39.6,32.3-63.9,29.9H419.3c-14.8,0-78.9-32.3-96.2-40.8c-0.3-0.2-0.5-0.1-0.8-0.2V450.3c75.9-30.6,139.9-113.9,155.5-144.6c17.6-41.8,12.4-70.2,12.4-166.1c0-47.6,17.1-54,35.4-54c16.1,0,32.3,4,45.3,24.7c38.4,61.1,21.5,175.3-26.2,274l-8.3,41.3l309.2-0.1c46.6,2.6,44.2,15,44.2,50.2l-0.3,11c0.1,0.5-1.2,30.5-16.8,43.7c-13.1,11.1-23.7,11.5-23.7,11.5l-0.3,36.4c0,0,15.8,2.2,24.1,7.9c12.4,8.7,18,25.2,17.4,43.2C889.3,652.1,850.1,685.9,828.9,685.9z" fill='white' /></g>
        </svg></button>
        <span className='like__count'>{data.likeCount}</span>
      </div>
    </div>
  )
};