// import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { TextFormForMessagesContainer } from '../TextForm/TextForm';
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

function Messages({ dialogs, messages }) {
  const dialogsElements = dialogs.map(el => <DialogItem data={el} key={el.id} />);
  const messagesElements = messages.map(el => <Message data={el} key={el.id} />);

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
          <TextFormForMessagesContainer />
        </div>
      </div>
    </div>
  )
};

let mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs,
  messages: state.messagesPage.messages,
});

export default withAuthRedirect(connect(mapStateToProps)(Messages));