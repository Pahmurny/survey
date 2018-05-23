import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';

import user from './userReducer';
import users from './usersReducer';
import surveys from './surveysReducer';
import questions from './questionsReducer';
import pages from './pagesReducer';

export default combineReducers({
  user: user,
  users: users,
  surveys: surveys,
  questions: questions,
  pages: pages,
  notifications: notificationsReducer(),
});
