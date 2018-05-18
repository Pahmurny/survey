import { GET_SURVEYS, GET_SURVEY_BY_ID, CREATE_SURVEY, DELETE_SURVEY } from '../actions/surveysActions';

export default function reducer(state = {
  surveys: [],
  activeSurvey: {},
  isFetching: false,
  isRecieved: false,
  error: null,
}, action) {
  switch (action.type) {
    case `${GET_SURVEYS}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${GET_SURVEYS}_FULFILLED`: {
      return {
        ...state,
        surveys: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${GET_SURVEYS}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        error: {
          type: 'Error on recieving surveys list',
          message: action.payload,
        },
      };
    }
    case `${GET_SURVEY_BY_ID}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${GET_SURVEY_BY_ID}_FULFILLED`: {
      return {
        ...state,
        activeSurvey: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${GET_SURVEY_BY_ID}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        error: {
          type: 'Error on recieving survey by id',
          message: action.payload,
        },
      };
    }
    case `${CREATE_SURVEY}_PENDING`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
      };
    }
    case `${CREATE_SURVEY}_FULFILLED`: {
      return {
        ...state,
        activeSurvey: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${CREATE_SURVEY}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        error: {
          type: 'Error on creating survey',
          message: action.payload,
        },
      };
    }
    case `${DELETE_SURVEY}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${DELETE_SURVEY}_FULFILLED`: {
      return {
        ...state,
        surveys: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${DELETE_SURVEY}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        error: {
          type: 'Error on deleting survey',
          message: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
