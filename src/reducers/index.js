import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';

import user from './userReducer';
import users from './usersReducer';
import surveys from './surveysReducer';

export default combineReducers({
  user: user,
  users: users,
  surveys: surveys,
  notifications: notificationsReducer(),
});
