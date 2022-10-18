// import React from 'react';
import { connect } from 'react-redux';
import './FriendsList.css';

const Friend = ({ data, vertical }) => {
  return <li className='friend'>
    <a href={data.url} className={"friend__link" + (vertical ? ' vertical' : '')}>
      <img className="friend__avatar" src={data.imgSrc} alt="avatar" />
      <span className="friend__name">{data.name}</span>
    </a>
  </li>
};

function FriendsList({ data, vertical }) {
  const friendsElements = data.map(el => <Friend data={el} vertical={vertical} key={el.id} />);
  return (
    <div className="friends">
      <h2 className="friends__title">Friends</h2>
      <ul className={"friends__list" + (vertical ? ' vertical' : '')}>
        {friendsElements}
      </ul>
    </div>
  )
};

const mapStateToProps = (state, myProps) => {
  const data = myProps.count ? state.friendsList.slice(0, myProps.count) : state.friendsList;
  return {
    data,
    vertical: myProps.vertical || false,
  };
};

export const FriendsListContainer = connect(mapStateToProps)(FriendsList);