import axios from 'axios';
import { API_URL } from '../constants';

export const USERS = 'USERS';

function getUsersList() {
  return axios.get(`http://${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const getUsers = () => {
  return {
    type: USERS,
    payload: getUsersList(),
  };
};

export default {
  getUsers,
};
