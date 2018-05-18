export default function reducer(state = {
  user: {},
  token: null,
  isLoggedIn: false,
  isPending: false,
  isChecked: !localStorage.getItem('jwtToken'),
}, action) {
  switch (action.type) {
    case 'USER_LOGIN_PENDING': {
      return { ...state, isPending: true };
    }
    case 'USER_LOGIN_FULFILLED': {
      localStorage.setItem('jwtToken', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        isPending: false,
      };
    }
    case 'USER_SIGNUP_PENDING': {
      return { ...state, isPending: true };
    }
    case 'USER_SIGNUP_FULFILLED': {
      localStorage.setItem('jwtToken', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        isPending: false,
      };
    }
    case 'USER_CHECK_PENDING': {
      return { ...state, isPending: true };
    }
    case 'USER_CHECK_FULFILLED': {
      return {
        ...state,
        user: action.payload,
        token: localStorage.getItem('jwtToken'),
        isLoggedIn: true,
        isPending: false,
        isChecked: true,
      };
    }
    case 'USER_CHECK_REJECTED': {
      return {
        ...state,
        user: {},
        token: '',
        isLoggedIn: false,
        isPending: false,
        isChecked: true,
      };
    }
    case 'USER_LOGOUT': {
      localStorage.removeItem('jwtToken');
      return {
        ...state, user: null, token: null, isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
