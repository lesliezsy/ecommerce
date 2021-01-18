import { createStore, applyMiddleware } from 'redux';
// allow browser to cache store
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// 經過middlewares,得到一些資料後再繼續 root reducer
const middlewares = [logger];

// applyMiddleware put logger's return value
// applyMiddleware 函式，在建立 redux store 時把middleware 當作參數傳遞進去，redux 就會自動建立與 middleware 的連結
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// to pass in the store
export const persistor = persistStore(store);

export default { store, persistor };