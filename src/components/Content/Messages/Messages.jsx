// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Messages.css';

const DialogItem = props => (
  <li className="dialog-item">
    <NavLink to={props.id}>{props.name}</NavLink>
  </li>
);

const Message = props => (
  <div className={"message " + (props.side || 'left')}>{props.message}</div>
);

const dialogsData = [
  { id: 'id1', name: 'Denis' },
  { id: 'id2', name: 'Vova' },
  { id: 'id3', name: 'Lena' },
  { id: 'id4', name: 'Larisa' },
];

const dialogsElements = dialogsData.map(el => <DialogItem id={el.id} name={el.name} />);

const messagesData = [
  { id: '1', message: 'Hi!', side: 'left' },
  { id: '2', message: 'Hello!!', side: 'right' },
  { id: '3', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', side: 'left' },
  { id: '3', message: 'Velit dolores voluptate vero, iste sapiente hic molestias et temporibus error adipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'left' },
  { id: '4', message: 'Totam, omnis.', side: 'right' },
  { id: '5', message: 'Hitman', side: 'right' },
  { id: '6', message: 'Hitachi', side: 'left' },
];

const messagesElements = messagesData.map(el => <Message message={el.message} side={el.side} />);

export function Messages() {
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