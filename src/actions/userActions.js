import axios from 'axios';

import { API_URL } from '../constants';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    payload: null,
  };
};

function postLoginUser(login, pass) {
  return axios.post(`http://${API_URL}/auth`, {}, {
    auth: {
      username: login,
      password: pass,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const userLogin = (login, pass) => {
  return {
    type: USER_LOGIN,
    payload: postLoginUser(login, pass),
  };
};

export const userLoginOld = (payload) => {
  return {
    type: USER_LOGIN,
    payload: payload,
  };
};

export default {
  userLogout,
  userLogin,
};
