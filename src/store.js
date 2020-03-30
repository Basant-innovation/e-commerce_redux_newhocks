import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initailState = {};
const middlewares = [thunk];
export default createStore(
  rootReducer,
  initailState,
  applyMiddleware(...middlewares)
);
