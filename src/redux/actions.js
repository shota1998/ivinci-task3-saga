import * as actionType from './actionTypes';

export const fetchCartItemRequest = () => ({
  type: actionType.FETCH_CART_ITEM_REQUEST,
});

export const updateCartReducer = (cart) => ({
  type: actionType.UPDATE_CART_REDUCER,
  payload: { cart },
});

export const addItem = (item) => ({
  type: actionType.ADD_ITEM,
  payload: { item },
});

export const removeItem = (item) => ({
  type: actionType.REMOVE_ITEM,
  payload: { item },
});
