
export const FETCHING_USER = "FETCHING_USER";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS"
export const USER_FETCH_FAILURE = "USER_FETCH_FAILURE";

export const ADD_HOME = "ADD_HOME";
export const UPDATE_HOME = "UPDATE_HOME";
export const DELETE_HOME = "DELETE_HOME";

export const fetchingUser = () => {
    return {
        type: FETCHING_USER,
        payload: "Currently fetching user."
    };
}

export const userFetchSuccess = () => {
    return {
        type: USER_FETCH_SUCCESS,
        payload: "User fetched."
    };
}

export const userFetchFailure = () => {
    return {
        type: USER_FETCH_FAILURE,
        payload: "Could not fetch user."
    };
}