import { createSelector } from 'reselect';

// 設定selector 讓data可以重複使用：讓shopping cart的資料可以重複利用
// it's a memorized selector for the value

// 首先從cart-icon傳來state資料，接著帶入cart資料
const selectCart = state => state.cart;

// 先過取出one layer的資料量，也正好是我們要用的，不用全部資料都帶出
// 從上方的cart取得cartItems資料
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// 計算購物車商品數量
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )
)