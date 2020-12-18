import React from 'react';

// 設定redux binding
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted> Add to cart </CustomButton>
    </div>
);
 
// update actual item
// 派用addItem的value:item 到 component
// addItem() 是一個 action creater
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default CollectionItem;