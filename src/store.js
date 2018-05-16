import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux'; // It breacks reducers
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers';

export const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(promise(), thunk, logger, historyMiddleware);

export default createStore(reducer, middleware);

