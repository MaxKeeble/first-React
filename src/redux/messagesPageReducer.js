const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialValue = {
  dialogs: [
    { id: '1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
    { id: '2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
    { id: '3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
    { id: '4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
  ],
  messages: [
    { id: '1', message: 'Hi!', side: 'left' },
    { id: '2', message: 'Hello!!', side: 'right' },
    { id: '3', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', side: 'left' },
    { id: '4', message: 'Velit dolores voluptate vero, iste sapiente hic molestias et temporibus error adipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'left' },
    { id: '5', message: 'Totam, omnis. Radipisci est doloremque dignissimos possimus c orporis repellendus dolorum reprehenderit?', side: 'right' },
    { id: '6', message: 'Hitman', side: 'right' },
    { id: '7', message: 'Hitachi', side: 'left' },
  ],
  newMessageText: '',
};

const actors = {

  [SEND_MESSAGE]: (substate, action) => {
    let text = substate.newMessageText;

    if (!text.trim()) return substate;

    let obj = { id: 1, message: text, side: 'right' };
    obj.id = +substate.messages[substate.messages.length - 1].id + 1;

    substate = { ...substate };
    substate.messages = [...substate.messages];

    substate.messages.push(obj);
    substate.newMessageText = '';
    return substate;
  },

  [UPDATE_MESSAGE_TEXT]: (substate, action) => {
    substate = { ...substate };
    substate.newMessageText = action.text;
    return substate;
  }

};

const messagePageReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default messagePageReducer;


export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreator = (textareaText) => ({ type: UPDATE_MESSAGE_TEXT, text: textareaText });