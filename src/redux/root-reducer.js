import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// get actual local storage. Use local storage as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // array containing the string name that any reducer we want to store
};

// merge reducers into one
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// 現在rootReducer擁有persist capability
export default persistReducer(persistConfig, rootReducer);