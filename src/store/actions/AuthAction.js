import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from "../constants/AuthConstants";
import axios from "axios";

export const authStart = () => (dispatch) => {
  dispatch({ type: AUTH_START });
};

export const authSuccess = (token, userId) => (dispatch) => {
  dispatch({ type: AUTH_SUCCESS, payload: { token, userId } });
};

export const authFail = (error) => (dispatch) => {
  dispatch({ type: AUTH_FAIL, payload: error });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  dispatch({ type: AUTH_LOGOUT });
};

export const checkAuthTimeout = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000);
};

export const auth = (email, password, isSignup) => async (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
  if (!isSignup) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
  }

  await axios
    .post(url, authData)
    .then((response) => {
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", new Date(new Date().getTime() + response.data.expiresIn * 1000));
        localStorage.setItem("userId", response.data.localId);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch((error) => {
      dispatch(authFail(error.response.data.error));
    });
};

export const setAuthRedirectPath = (path) => (dispatch) => {
    dispatch({ type: SET_AUTH_REDIRECT_PATH, payload: path });
};

export const authCheckState = () => (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
        dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if (expirationDate <= new Date()) {
        dispatch(logout());
        } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
            checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
            )
        );
        }
    }
};
