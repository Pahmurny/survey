import axios from 'axios';
import { notify } from 'reapop';

import { API_URL } from '../constants';

export const GET_SURVEYS = 'GET_SURVEYS';
export const GET_SURVEY_BY_ID = 'GET_SURVEY_BY_ID';
export const CREATE_SURVEY = 'CREATE_SURVEY';
export const DELETE_SURVEY = 'DELETE_SURVEY';
export const SAVE_SURVEY = 'SAVE_SURVEY';


function getSurveysCall() {
  return axios.get(`http://${API_URL}/surveys`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const getMySurveys = () => {
  return {
    type: GET_SURVEYS,
    payload: getSurveysCall(),
  };
};

function getSurveyByIdCall(id) {
  return axios.get(`http://${API_URL}/surveys/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const getSurveyById = (id) => {
  return {
    type: GET_SURVEY_BY_ID,
    payload: getSurveyByIdCall(id),
  };
};


function createSurveyCall(survey, dispatch) {
  return axios.post(`http://${API_URL}/surveys`, {
    survey,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      dispatch(notify({ message: 'Created!', status: 200 }));
      return response.data;
    })
    .catch((error) => {
      dispatch(notify({ message: 'Error while creating!', status: 400 }));
      return Promise.reject(error);
    });
}

export const createSurvey = (survey, dispatch) => {
  return {
    type: CREATE_SURVEY,
    payload: createSurveyCall(survey, dispatch),
  };
};

function deleteSurveyCall(surveyId) {
  return axios.delete(`http://${API_URL}/surveys/${surveyId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const deleteSurvey = (surveyId) => {
  return {
    type: DELETE_SURVEY,
    payload: deleteSurveyCall(surveyId),
  };
};

function saveSurveyCall(survey, dispatch) {
  return axios.put(`http://${API_URL}/surveys`, {
    survey,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      dispatch(notify({ message: 'Saved', status: 200 }));
      return response.data;
    })
    .catch((error) => {
      dispatch(notify({ message: 'Error While saving!', status: 400 }));
      return Promise.reject(error);
    });
}

export const saveSurvey = (survey, dispatch) => {
  return {
    type: SAVE_SURVEY,
    payload: saveSurveyCall(survey, dispatch),
  };
};

export default {
  getMySurveys,
  getSurveyById,
  createSurvey,
  deleteSurvey,
  saveSurvey,
};
