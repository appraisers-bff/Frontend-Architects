import axios from "axios";

//Action types for Signup page
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

//Action types for Login page
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//Action types for Logout
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//Action types for Appraisal form
export const APPRAISAL_START = "APPRAISAL_START";
export const APPRAISAL_SUCCESS = "APPRAISAL_SUCCESS";
export const APPRAISAL_FAILURE = "APPRAISAL_FAILURE";

//Action types for homes in profile
export const GET_HOMES = "GET_HOMES";
export const GET_HOMES_SUCCESS = "GET_HOMES_SUCCESS";
export const GET_HOMES_FAILURE = "GET_HOMES_FAILURE";

export const ADD_HOME = "ADD_HOME";

export const UPDATE_HOME = "UPDATE_HOME";
export const UPDATE_HOME_SUCCESS = "UPDATE_HOME_SUCCESS";
export const UPDATE_HOME_FAILURE = "UPDATE_HOME_FAILURE";

export const GET_HOME_TO_UPDATE = "GET_HOME_TO_UPDATE";

export const DELETE_HOME_START = "DELETE_HOME_START";
export const DELETE_HOME_SUCCESS = "DELETE_HOME_SUCCESS";
export const DELETE_HOME_FAILURE = "DELETE_HOME_FAILURE";

export const appraiseToServer = homeInputs => dispatch => {
  dispatch({ type: APPRAISAL_START });
  return axios
    .post(`https://worther.herokuapp.com/api/house`, homeInputs)
    .then(res => dispatch({ type: APPRAISAL_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: APPRAISAL_FAILURE,
        payload: "You have an error appraising"
      })
    );
};

export const registerToServer = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return (
    axios
      //     .post("http://localhost:8000/api/register", creds)
      .post("https://worther.herokuapp.com/api/register", creds)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        alert("Registration successful! Please log in.");
        console.log(res.data);
      })
      .catch(err =>
        dispatch({
          type: REGISTER_FAILURE,
          payload: "You have an error creating a user"
        })
      )
  );
};

export const loginToServer = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return (
    axios
      //     .post("http://localhost:8000/api/login", creds)
      .post("https://worther.herokuapp.com/api/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err =>
        dispatch({
          type: LOGIN_FAILURE,
          payload:
            "The username or password you entered does not match any account. Please sign up for an account"
        })
      )
  );
};

export const logoutToServer = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_SUCCESS });
};

export const getHomes = userId => dispatch => {
  dispatch({ type: GET_HOMES });
  return axios
    .get(`https://worther.herokuapp.com/api/user/${userId}/house`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({ type: GET_HOMES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: GET_HOMES_FAILURE,
        payload: "Unable to retrieve homes."
      });
    });
};

export const updateHome = homeId => dispatch => {
  dispatch({ type: UPDATE_HOME });
  return axios
    .post(`https://worther.herokuapp.com/api/house/${homeId}`)
    .then(response => {
      dispatch({ type: UPDATE_HOME_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_HOME_FAILURE,
        payload: "Unable to update home."
      });
    });
};

export const passHomeToUpdate = house => {
  return {
    type: GET_HOME_TO_UPDATE,
    payload: house
  };
};

export const deleteHomeFromServer = (homeId, userId) => dispatch => {
  dispatch({ type: DELETE_HOME_START });
  return axios
    .delete(`https://worther.herokuapp.com/api/house/${homeId}`)
    .then(response => {
      dispatch({
        type: DELETE_HOME_SUCCESS,
        payload: response.data
      });
    })
    .then( () => getHomes(userId)(dispatch) )
    .catch(error => {
      dispatch({
        type: DELETE_HOME_FAILURE,
        payload: "Unable to delete home."
      });
    });
};
