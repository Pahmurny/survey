import axios from 'axios';
import { API_URL } from '../constants';

export const GET_SURVEYS = 'GET_SURVEYS';
export const GET_SURVEY_BY_ID = 'GET_SURVEY_BY_ID';
export const CREATE_SURVEY = 'CREATE_SURVEY';
export const DELETE_SURVEY = 'DELETE_SURVEY';
export const ADD_SURVEY_PAGE = 'ADD_SURVEY_PAGE';
export const DELETE_SURVEY_PAGE = 'DELETE_SURVEY_PAGE';
export const SET_ACTIVE_SURVEY_PAGE = 'SET_ACTIVE_SURVEY_PAGE';
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


function createSurveyCall(survey) {
  return axios.post(`http://${API_URL}/surveys`, {
    survey,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const createSurvey = (survey) => {
  return {
    type: CREATE_SURVEY,
    payload: createSurveyCall(survey),
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

export const addPage = (order) => {
  return {
    type: ADD_SURVEY_PAGE,
    payload: order,
  };
};

export const deletePage = (page) => {
  return {
    type: DELETE_SURVEY_PAGE,
    payload: page,
  };
};

export const setActivePage = (order) => {
  return {
    type: SET_ACTIVE_SURVEY_PAGE,
    payload: order,
  };
};

function saveSurveyCall(survey) {
  return axios.put(`http://${API_URL}/surveys`, {
    survey,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const saveSurvey = (survey) => {
  return {
    type: SAVE_SURVEY,
    payload: saveSurveyCall(survey),
  };
};

export default {
  getMySurveys,
  getSurveyById,
  createSurvey,
  deleteSurvey,
  addPage,
  deletePage,
  setActivePage,
  saveSurvey,
};
