import * as actionType from './actionTypes';

export const addItem = (item) => ({
  type: actionType.ADD_ITEM,
  payload: { item },
});

export const removeItem = (id) => ({
  type: actionType.REMOVE_ITEM,
  payload: { id },
});

export const fetchItemRequest = () => ({
  type: actionType.FETCH_ITEM_REQUEST,
});

export const fetchItemSuccess = (items) => ({
  type: actionType.FETCH_ITEM_SUCCESS,
  payload: { items },
});

export const fetchCartItemRequest = () => ({
  type: actionType.FETCH_CART_ITEM_REQUEST,
});

export const fetchCartItemSuccess = (items) => ({
  type: actionType.FETCH_CART_ITEM_SUCCESS,
  payload: { items },
});
