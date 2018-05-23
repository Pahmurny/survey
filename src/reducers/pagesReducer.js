import {
  ADD_SURVEY_PAGE,
  UPDATE_SURVEY_PAGE,
  DELETE_SURVEY_PAGE,
  SET_ACTIVE_SURVEY_PAGE,
} from '../actions/pagesActions';
import { GET_SURVEY_BY_ID } from '../actions/surveysActions';

export default function reducer(state = {
  activeSurveyPages: [],
  activeSurveyPage: {},
  isFetching: false,
  isRecieved: false,
}, action) {
  switch (action.type) {
    case `${ADD_SURVEY_PAGE}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${ADD_SURVEY_PAGE}_FULFILLED`: {
      return {
        ...state,
        activeSurveyPages: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${ADD_SURVEY_PAGE}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        activeSurveyPages: [],
        error: {
          type: 'Error on adding survey page',
          message: action.payload,
        },
      };
    }

    case `${UPDATE_SURVEY_PAGE}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${UPDATE_SURVEY_PAGE}_FULFILLED`: {
      return {
        ...state,
        activeSurveyPages: action.payload,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${UPDATE_SURVEY_PAGE}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        activeSurveyPages: [],
        error: {
          type: 'Error on adding survey page',
          message: action.payload,
        },
      };
    }

    case `${DELETE_SURVEY_PAGE}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        isRecieved: false,
      };
    }
    case `${DELETE_SURVEY_PAGE}_FULFILLED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: true,
        activeSurveyPages: action.payload,
        activeSurveyPage: action.payload[0] || {},
      };
    }
    case `${DELETE_SURVEY_PAGE}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
        error: {
          type: 'Error on deleting survey page',
          message: action.payload,
        },
      };
    }

    case `${SET_ACTIVE_SURVEY_PAGE}`: {
      return {
        ...state,
        activeSurveyPage: state.activeSurveyPages.find(page => page.order === action.payload),
      };
    }

    case `${GET_SURVEY_BY_ID}_FULFILLED`: {
      return {
        ...state,
        activeSurveyPages: action.payload.pages,
      };
    }

    default:
      return state;
  }
}
