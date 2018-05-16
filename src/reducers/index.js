import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './userReducer';
import users from './usersReducer';

export default combineReducers({
  user: user,
  users: users,
  router: routerReducer,
});
