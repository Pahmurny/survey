import axios from 'axios';

export const USERS = 'USERS';

function getUsersList() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
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
