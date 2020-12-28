import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

// a special syntax in React for importing SVG.
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// 加 className 是為了應用 css

// 要輸出的組件要長怎樣 在這裡設定好
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={ toggleCartHidden } />
        <span className='item-count'>{itemCount}</span>
    </div>
)


// 從action傳來ㄉ dispatch
const mapDispatchToProps = dispatch => ({
    // function triggers dispatch of toggleCartHidden
     toggleCartHidden: () => dispatch(toggleCartHidden())
})

// 新增cart item quantity
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
// })

// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
//         )
// })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);