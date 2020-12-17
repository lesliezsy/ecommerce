import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// a special syntax in React for importing SVG.
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// 加 className 是為了應用 css

// 要輸出的組件要長怎樣 在這裡設 定好
const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={ toggleCartHidden } />
        <span className='item-count'>0</span>
    </div>
)

// 從action傳來ㄉprops
const mapDispatchToProps = dispatch => ({
    // function triggers dispatch of toggleCartHidden
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);