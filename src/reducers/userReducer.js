export default function reducer(state = {
  user: {},
  token: null,
  isLoggedIn: false,
  isPending: false,
}, action) {
  switch (action.type) {
    case 'USER_LOGIN_PENDING': {
      return { ...state, isPending: true };
    }
    case 'USER_LOGIN_FULFILLED': {
      console.log('User fulfiled');
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        isPending: false,
      };
    }
    case 'USER_LOGOUT': {
      return {
        ...state, user: null, token: null, isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
