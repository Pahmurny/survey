export default function reducer(state = {
  name: 'Testo',
  isLoggedIn: true,
}, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      return { ...state, name: action.payload, isLoggedIn: true };
    }
    case 'USER_LOGOUT': {
      return { ...state, name: null, isLoggedIn: false };
    }
    default:
      return state;
  }
}
