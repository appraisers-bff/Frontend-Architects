import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

//Importing reducers
import reducer from "./reducers/index";
import formReducer from "./reducers/formReducer";

//Import Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const reducers = combineReducers({
  reducer: reducer,
  form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
