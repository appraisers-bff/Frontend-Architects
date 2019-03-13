import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const registerToServer = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("http://localhost:6000/api/register", creds)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: REGISTER_FAILURE,
        payload: "You have an error creating a user"
      })
    );
};

export const loginToServer = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:6000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: "You have an error logging in"
      })
    );
};