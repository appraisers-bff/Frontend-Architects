import {
  GET_HOMES,
  GET_HOMES_SUCCESS,
  GET_HOMES_FAILURE,
  UPDATE_HOME,
  UPDATE_HOME_SUCCESS,
  UPDATE_HOME_FAILURE,
  DELETE_HOME_START,
  DELETE_HOME_SUCCESS,
  DELETE_HOME_FAILURE,
  GET_HOME_TO_UPDATE
} from "../actions";

const initialState = {
  houses: [],
  fetchingHouses: false,
  updatingHouse: false,
  addingHouse: false,
  deletingHouse: false,
  currentHouse: null,
  error: null
};

const homesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMES:
      return {
        ...state,
        fetchingHouses: true
      };

    case GET_HOMES_SUCCESS:
      return {
        ...state,
        houses: action.payload,
        fetchingHouses: false
      };

    case GET_HOMES_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case UPDATE_HOME:
      return {
        ...state,
        updatingHouse: true
      };

    case UPDATE_HOME_SUCCESS:
      return {
        ...state,
        houses: action.payload,
        updatingHouse: false
      };

    case UPDATE_HOME_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case GET_HOME_TO_UPDATE:
      return {
        ...state,
        currentHouse: action.payload
      };

    case DELETE_HOME_START:
      return {
        ...state,
        deletingHouse: true
      };

    case DELETE_HOME_SUCCESS:
      return {
        ...state,
        deletingHouse: false
      };

    case DELETE_HOME_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default homesReducer;
