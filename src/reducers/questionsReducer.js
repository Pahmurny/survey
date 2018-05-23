import { CREATE_QUESTION } from '../actions/questionsActions';

export default function reducer(state = {
  questions: [],
  isFetching: false,
  isRecieved: false,
}, action) {
  switch (action.type) {
    case `${CREATE_QUESTION}_PENDING`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
      };
    }
    case `${CREATE_QUESTION}_FULFILLED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: true,
      };
    }
    case `${CREATE_QUESTION}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        isRecieved: false,
      };
    }

    default:
      return state;
  }
}
