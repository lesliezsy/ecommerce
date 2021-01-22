import React from 'react';
import { connect } from "react-redux";

// import collectionItemComponent from '../../components/collection-item/collection-item.component';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log("要URL路徑轉換成功才會出現：", collection);
    return (
        <div className='collection-page'>
            <h2 className="title">{ title }</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};

// this is necessary bc unlike other selectors, 
// this selector needs a part of the state depending on the URL param.
// 新的資料傳進來，觸發selectCollection
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
export default connect(mapStateToProps)(CollectionPage);


