import axios from 'axios';

import { API_URL } from '../constants';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_CHECK = 'USER_CHECK';

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    payload: null,
  };
};

function postLoginUser(email, password) {
  return axios.post(`http://${API_URL}/auth`, {}, {
    auth: {
      username: email,
      password: password,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const userLogin = (email, password) => {
  return {
    type: USER_LOGIN,
    payload: postLoginUser(email, password),
  };
};

function postSignupUser(email, password, name) {
  return axios.post(`http://${API_URL}/users`, {
    email,
    password,
    name,
  }, {})
    .then((response) => {
      return response.data;
    });
}

export const userSignup = (email, password, name) => {
  return {
    type: USER_SIGNUP,
    payload: postSignupUser(email, password, name),
  };
};

function getUserInfo() {
  const token = localStorage.getItem('jwtToken');
  return axios.get(`http://${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const checkUserToken = () => {
  return {
    type: USER_CHECK,
    payload: getUserInfo(),
  };
};


export default {
  userSignup,
  userLogout,
  userLogin,
  checkUserToken,
};
