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

//Action creators

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
          payload: "You have an error logging in"
        })
      )
  );
};

export const logoutToServer = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_SUCCESS });
};
