import { createReducer } from "@reduxjs/toolkit";
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from "../constants/AuthConstants";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AUTH_START, (state, _) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    })
    .addCase(AUTH_SUCCESS, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        error: null,
        loading: false,
      };
    })
    .addCase(AUTH_FAIL, (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    })
    .addCase(AUTH_LOGOUT, (state, _) => {
      return {
        ...state,
        token: null,
        userId: null,
      };
    });
});

export default authReducer;
