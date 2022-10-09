import { combineReducers, legacy_createStore as createStore } from "redux";
import friendsListReducer from "./friendsListReducer";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
  friendsList: friendsListReducer,
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
});

const store = createStore(reducers);

export default store;