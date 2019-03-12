import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  APPRAISAL_START,
  APPRAISAL_SUCCESS,
  APPRAISAL_FAILURE
} from "../actions";

const initialState = {
  users: [],
  signingUp: false,
  loggingIn: false,
  error: null,
  submittingAppraisal: false
};

const formReducer = (state = initialState, action) => {
  console.log("in the reducer");
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        users: [],
        signingUp: true,
        loggingIn: false,
        submittingAppraisal: false,
        error: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: true
      };

    case LOGIN_START:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: true,
        submittingAppraisal: false,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: true
      };

    case APPRAISAL_START:
      return {
        ...state,
        users: [],
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: true,
        error: null
      };

    default:
      return state;
  }
};

export default formReducer;
