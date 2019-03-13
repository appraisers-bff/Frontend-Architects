import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  APPRAISAL_START,
  APPRAISAL_SUCCESS,
  APPRAISAL_FAILURE
} from "../actions";

const initialState = {
  registeredUser: {},
  user_id: "",
  signingUp: false,
  loggingIn: false,
  user_token: localStorage.getItem("token"),
  error: null,
  submittingAppraisal: false,
  house: {}
};

const formReducer = (state = initialState, action) => {
  console.log("in the reducer");
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registeredUser: null,
        user_id: null,
        signingUp: true,
        user_token: localStorage.getItem("token"),
        submittingAppraisal: false,
        house: null,
        error: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registeredUser: action.payload,
        user_id: action.payload.id,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registeredUser: null,
        user_id: null,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: true
      };

    case LOGIN_START:
      return {
        ...state,
        registeredUser: null,
        user_id: null,
        signingUp: false,
        loggingIn: true,
        submittingAppraisal: false,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        registeredUser: null,
        user_id: action.payload.id,
        signingUp: false,
        loggingIn: false,
        user_token: action.payload.token,
        submittingAppraisal: false,
        error: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        registeredUser: null,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: true
      };

    case APPRAISAL_START:
      return {
        ...state,
        registeredUser: null,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: true,
        error: null
      };

    case APPRAISAL_SUCCESS:
      return {
        ...state,
        registeredUser: null,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: null,
        house: action.payload
      };

    case APPRAISAL_FAILURE:
      return {
        ...state,
        registeredUser: null,
        signingUp: false,
        loggingIn: false,
        submittingAppraisal: false,
        error: action.payload
      };

    case LOGOUT_START:
      return {
        ...state
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        registeredUsers: null,
        user_token: ""
      };

    default:
      return state;
  }
};

export default formReducer;
