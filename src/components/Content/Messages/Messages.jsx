// import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { TextFormForMessagesContainer } from '../TextForm/TextForm';
import './Messages.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { getDialogs, getMessages } from '../../../redux/messagesPageReducer';


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
          <SimpleBar autoHide={false} style={{
            maxHeight: 320,
            marginBottom: 20,
            padding: '10px 15px 10px 10px',
            border: '1px solid #999',
            borderRadius: 10,
          }} >
            {messagesElements}
          </SimpleBar>
          <TextFormForMessagesContainer />
        </div>
      </div>
    </div>
  )
};


let mapStateToProps = (state) => ({
  dialogs: getDialogs(state),
  messages: getMessages(state),
});
// export default withAuthRedirect(connect(mapStateToProps)(Messages));
export default compose(withAuthRedirect, connect(mapStateToProps))(Messages);