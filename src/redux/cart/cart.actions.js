import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// export default const CartActionTypes = {
//     TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN'
// }

// 新增一個action "addItem"
// return the object which represents the new addItem type as well as payload which then finally dispatches.
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item // payload is the item that you selected.
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item // payload is the item that you want to remove.
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item // payload is the item that you try to clear.
})