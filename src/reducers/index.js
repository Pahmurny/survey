import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import user from './userReducer';
import users from './usersReducer';
import surveys from './surveysReducer';

export default combineReducers({
  user: user,
  users: users,
  surveys: surveys,
  // router: routerReducer,
});
