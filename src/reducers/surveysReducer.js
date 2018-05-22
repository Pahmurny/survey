import {
  GET_SURVEYS,
  GET_SURVEY_BY_ID,
  CREATE_SURVEY,
  DELETE_SURVEY,
  ADD_SURVEY_PAGE,
  DELETE_SURVEY_PAGE,
  SET_ACTIVE_SURVEY_PAGE,
} from '../actions/surveysActions';
import { guidGenerator } from './helper';


export default function reducer(state = {
  surveys: [],
  activeSurvey: {},
  activeSurveyPages: [],
  activeSurveyPage: {},
  isFetching: false,
  isRecieved: false,
  error: null,
  redirectTo: null,
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
        redirectTo: null,
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
        redirectTo: action.payload._id,
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
    case `${ADD_SURVEY_PAGE}`: {
      const newPage = {
        _id: guidGenerator('page'),
        order: action.payload,
        title: `Page ${action.payload}`,
      };
      return {
        ...state,
        activeSurveyPages: [...state.activeSurveyPages, newPage],
      };
    }
    case `${DELETE_SURVEY_PAGE}`: {
      let newActivePages = [...state.activeSurveyPages.filter(page => page.order !== action.payload.order)];
      if (newActivePages.length === 0) {
        newActivePages = [{
          _id: guidGenerator('page'),
          order: 1,
          title: 'Page 1',
        }];
      }
      return {
        ...state,
        activeSurveyPages: newActivePages,
      };
    }
    case `${SET_ACTIVE_SURVEY_PAGE}`: {
      return {
        ...state,
        activeSurveyPage: state.activeSurveyPages.find(page => page.order === action.payload),
      };
    }
    default:
      return state;
  }
}
