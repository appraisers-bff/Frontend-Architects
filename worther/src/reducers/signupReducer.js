import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions";

const initialState = {
  users: [],
  signingUp: false,
  loggingIn: false,
  error: null
};

const signupReducer = (state = initialState, action) => {
  console.log("in the reducer");
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        users: [],
        signingUp: true,
        loggingIn: false,
        error: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        signingUp: false,
        loggingIn: false,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: false,
        error: true
      };

    case LOGIN_START:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        signingUp: false,
        loggingIn: false,
        error: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: false,
        error: true
      };

    default:
      return state;
  }
};

export default signupReducer;
