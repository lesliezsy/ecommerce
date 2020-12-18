import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
        return {
            ...state,
            // import 現有的商品(existing arr)，還有action新fired的商品(newly added to arr)
            cartItems: addItemToCart(state.cartItems, action.payload)
        }

    // 如果上方沒有東西改變的話，預設會回傳這個 default 
    default:
      return state;
  }
};

export default cartReducer;