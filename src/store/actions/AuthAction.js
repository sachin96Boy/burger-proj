import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
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
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch((error) => {
      dispatch(authFail(error.response.data.error));
    });
};
