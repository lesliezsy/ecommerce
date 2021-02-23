import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

// 配對action.type的值
// 建立一個Reducer, 拆分reducer, 各自代表改變state的屬性
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case is "listen to action"
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // import 現有的商品(existing arr)，還有action新fired的商品(newly added to arr)
        // 帶入action.js來的item
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }

    // 如果上方沒有東西改變的話，預設會回傳這個 default 
    default:
      return state;
  }
};

export default cartReducer;