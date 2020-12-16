import React from 'react';

// a special syntax in React for importing SVG.
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// 加 className 是為了應用 css

// 要輸出的組件要長怎樣 在這裡設定好
const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;