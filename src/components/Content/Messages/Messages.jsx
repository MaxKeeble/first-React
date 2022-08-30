// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Messages.css';

const DialogItem = props => (
  <li className="dialog-item">
    <NavLink className="dialog-item__link" to={props.data.id}>
      <img className="dialog-item__img" src={props.data.imgSrc} alt="avatar" />
      <span className="dialog-item__name">{props.data.name}</span>
    </NavLink>
  </li>
);
const Message = props => (
  <div className={"message " + (props.data.side || 'left')}>{props.data.message}</div>
);

export function Messages({ data }) {
  
  const dialogsElements = data.dialogs.map(el => <DialogItem data={el} />);
  const messagesElements = data.messages.map(el => <Message data={el} />);

  return (
    <div className="">
      <h2 className='messages-title'>Dialogs</h2>
      <div className='messages'>
        <ul className="dialog-list">
          {dialogsElements}
        </ul>
        <div className="dialog-content">
          {messagesElements}
        </div>
      </div>
    </div>
  )
};