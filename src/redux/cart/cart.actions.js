import CartActionTypes from './cart.types';

//設定要傳入reducer的action.type參數，以決定將執行什麼動作，以及執行動作時額外所需之參數(也要傳入reducer)

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// export default const CartActionTypes = {
//     TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN'
// }

// 新增一個action "addItem"
// return the object which represents the new addItem type as well as payload which then finally dispatches.
// addItem 回傳一個物件，該物件有兩個key，第一個 type 代表該執行的事件類型為何
// 進入 Reducer 時會先判斷此 type 的值，payload則是執行動作時額外所需之參數
// 如 item 就是在新增item時要傳入之參數
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