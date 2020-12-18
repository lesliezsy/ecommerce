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
    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
};