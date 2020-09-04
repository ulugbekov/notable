import * as reduxModule from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from 'app/reducers';

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

const applied_middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  applied_middlewares.push(createLogger());
}

const store = createStore(
  createReducer,
  {},
  composeWithDevTools(applyMiddleware(...applied_middlewares))
);

export default store;
