// import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextFormContainer } from '../TextForm/TextFormContainer';
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

export function Messages({ store }) {
  const data = store.getState().messagesPage;
  const dialogsElements = data.dialogs.map(el => <DialogItem data={el} key={el.id}/>);
  const messagesElements = data.messages.map(el => <Message data={el} key={el.id}/>);
  let currentText = store.getState().messagesPage.newMessageText;

  return (
    <div className="">
      <h2 className='messages-title'>Dialogs</h2>
      <div className='messages'>
        <ul className="dialog-list">
          {dialogsElements}
        </ul>
        <div className="dialog-content-wrapper">
          <div className="dialog-content">
            {messagesElements}
          </div>
          <TextFormContainer buttonText='Add message' currentText={currentText} />
        </div>
      </div>
    </div>
  )
};