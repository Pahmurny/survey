export default function reducer(state = {
  users: [],
  isFetching: false,
  isRecieved: false,
}, action) {
  switch (action.type) {
    case 'USERS_PENDING': {
      return { ...state, isFetching: false, isRecieved: false };
    }
    case 'USERS_FULFILLED': {
      console.log('Action payload', action.payload);
      return { ...state, users: action.payload, isRecieved: false };
    }
    case 'USERS_REJECTED': {
      console.log('Error while getting users list');
      return { ...state, isRecieved: false };
    }
    default:
      return state;
  }
}
