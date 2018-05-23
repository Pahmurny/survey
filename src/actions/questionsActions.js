import axios from 'axios';


import { API_URL } from '../constants';

export const CREATE_QUESTION = 'CREATE_QUESTION';

function createQuestionCall(question) {
  return axios.post(`http://${API_URL}/surveys/${id}`, {
    question,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const createQuestion = (question) => {
  return {
    type: CREATE_QUESTION,
    payload: createQuestionCall(question),
  };
};

export default {

};
