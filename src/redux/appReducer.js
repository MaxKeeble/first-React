import { checkAuthorization } from "./authorizationReducer";
import { displayMainUserData, getMainUserData } from "./profilePageReducer";

const GET_INITIALIZED = 'GET_INITIALIZED';

const initialValue = {
  isInitialized: false,
};

const actors = {

  [GET_INITIALIZED]: (substate, action) => {
    return {
      ...substate,
      isInitialized: true,
    };
  },
  
};

const appReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default appReducer;


// Action creators
const getInitialized = () => ({ type: GET_INITIALIZED });


// Thunk creators
export const initialize = () => async (dispatch) => {
  let response = await dispatch(checkAuthorization());
  if (response.resultCode === 0) {
    await dispatch(getMainUserData(response.data.id));
    dispatch(displayMainUserData());
  }
  dispatch(getInitialized());
};


// App-selectors
export const getIsInitialized = (state) => {
  return state.app.isInitialized;
};