import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// 做一個collection map 讓selector可以去比較path的parameter找出要的url
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

// state 會有所有reducer的資料 { user: {…}, cart: {…}, directory: {…}, shop: {…}, _persist: {…}}
// 這邊只要shop的
const selectShop = state => state.shop;

// 利用selectShop的資料，創建一個商品分類（collections）的selector
// shop: {collections: {…}}
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// collections: {hats: {…}, sneakers: {…}, jackets: {…}, womens: {…}, mens: {…}}
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );  

// add memoize :
// If this function gets called again with the same collectionUrlParam, 
// don't rerun this function because we'll return the same value as last time, 
// which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize(collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]

    )
);