import * as productsActions from '../actions/products';
import { REQ_RATING_FOR_FEATURED } from '../constants/constants';
import {generateId} from '../utils';

export const isFeatured = ({rating, featured = false}) => rating >= REQ_RATING_FOR_FEATURED || featured;

export const products = (state = [], action) => {
    switch (action.type) {
        case productsActions.RECEIVE_PRODUCTS:
            return [
                ...action.products,
            ];
        case productsActions.DELETE_PRODUCT:
            return state.filter((item) => item.id !== action.productId);
        case productsActions.UPDATE_PRODUCT:
            return state.map((item) => {
                if (item.id === action.product.id) {
                    return {
                        ...item,
                        ...action.product,
                        featured: isFeatured(action.product)
                    }
                }
                return item;
            });
        case productsActions.CREATE_PRODUCT:
            return state.concat([{
                ...action.data,
                id: generateId(),
                featured: isFeatured(action.data),
                createdAt: new Date(),
            }]);
        default:
            return state;
    }
};

export const getProductById = ({products}, productId) => products.find(({id}) => `${id}` === `${productId}`);
