import * as actionType from './actionTypes';

export const addItem = (id) => ({
  type: actionType.ADD_ITEM,
  payload: id,
});

export const removeItem = (id) => ({
  type: actionType.REMOVE_ITEM,
  payload: id,
});

export const fetchItemRequest = () => ({
  type: actionType.FETCH_ITEM_REQUEST,
});

export const fetchItemSuccess = (items) => ({
  type: actionType.FETCH_ITEM_SUCCESS,
  payload: items,
});
