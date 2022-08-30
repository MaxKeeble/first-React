// import React from 'react';
import './FriendsList.css';

const Friend = ({ data, vertical }) =>
  <li className='friend'>
    <a href={data.url} className={"friend__link" + (vertical ? ' vertical' : '')}>
      <img className="friend__avatar" src={data.imgSrc} alt="avatar" />
      <span className="friend__name">{data.name}</span>
    </a>
  </li>;

export function FriendsList({ data, vertical, count }) {

  const friendsElements = data.slice(0, count).map(el => <Friend data={el} vertical={vertical} />);

  return (
    <div className="friends">
      <h2 className="friends__title">Друзья</h2>
      <ul className={"friends__list" + (vertical ? ' vertical' : '')}>
        {friendsElements}
      </ul>
    </div>
  )

};