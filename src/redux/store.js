import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// 經過middlewares,得到一些資料後再繼續 root reducer
const middlewares = [logger];

// applyMiddleware put return value
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;