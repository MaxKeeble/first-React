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
  let id = (await dispatch(checkAuthorization())).data.id;

  await dispatch(getMainUserData(id));

  dispatch(displayMainUserData());

  dispatch(getInitialized());
};

