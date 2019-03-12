// export const GET_USER = "GET_USER";
// export const LOGIN_FAILED = "LOGIN_FAILED";

// export const ADD_HOME = "ADD_HOME";
// export const DELETE_HOME = "DELETE_HOME";

// export const loginSuccess = () = {
//     return {
//         type: LOGIN_SUCCESS
//     }
// }

import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerToServer = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("http://localhost:5000/api/register", creds)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: REGISTER_FAILURE,
        payload: "You have an error creating a user"
      })
    );
};
