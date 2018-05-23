import axios from 'axios';

import { API_URL } from '../constants';

export const ADD_SURVEY_PAGE = 'ADD_SURVEY_PAGE';
export const UPDATE_SURVEY_PAGE = 'UPDATE_SURVEY_PAGE';
export const DELETE_SURVEY_PAGE = 'DELETE_SURVEY_PAGE';
export const SET_ACTIVE_SURVEY_PAGE = 'SET_ACTIVE_SURVEY_PAGE';


function addPageCall(survey, surveyPage) {
  return axios.post(`http://${API_URL}/pages`, {
    survey,
    surveyPage,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      console.log('Page created', response);
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export const addPage = (survey, surveyPage) => {
  return {
    type: ADD_SURVEY_PAGE,
    payload: addPageCall(survey, surveyPage),
  };
};

function updatePageCall(page) {
  return axios.put(`http://${API_URL}/pages/${page._id}`, {
    page,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const updatePage = (page) => {
  return {
    type: UPDATE_SURVEY_PAGE,
    payload: updatePageCall(page),
  };
};

function deleteSurveyPageCall(pageId) {
  return axios.delete(`http://${API_URL}/pages/${pageId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
    .then((response) => {
      return response.data;
    });
}

export const deletePage = (pageId) => {
  return {
    type: DELETE_SURVEY_PAGE,
    payload: deleteSurveyPageCall(pageId),
  };
};

export const setActivePage = (order) => {
  return {
    type: SET_ACTIVE_SURVEY_PAGE,
    payload: order,
  };
};


export default {
  addPage,
  updatePage,
  deletePage,
  setActivePage,
};
