export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // 如果購物車已有此商品，就增加其數量
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // 如果購物車裡面沒有此商品就新增，新增他本身既有的all properties，還有再新增quantity
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // 刪除數量為0的商品，留下數量不為0的商品
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id
        );
    }

    // 回傳剩下的商品
    return cartItems.map(cartItem =>
         cartItem.id === cartItemToRemove.id 
         ? { ...cartItem, quantity: cartItem.quantity - 1 }
         : cartItem );

};