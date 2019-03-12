import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";

const initialState = {
  users: [],
  signingUp: false,
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
        error: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        signingUp: false,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        users: [],
        signingUp: false,
        error: true
      };

    default:
      return state;
  }
};

export default signupReducer;
