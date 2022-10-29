import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import friendsListReducer from "./friendsListReducer";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersPageReducer from "./usersPageReducer";
import authorizationReducer from "./authorizationReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
  friendsList: friendsListReducer,
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  authorization: authorizationReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;