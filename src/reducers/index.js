import { combineReducers } from 'redux';

import user from './userReducer';
import users from './usersReducer';

export default combineReducers({
  user,
  users,
});
