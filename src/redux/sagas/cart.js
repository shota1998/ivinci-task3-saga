import { call, put, takeEvery, select } from 'redux-saga/effects';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { getChangedCartItem } from '../selectors';
import * as api from '../api/cart';

export function* fetchCartItems() {
  console.log('--- fetchCartItems()');
  try {
    const { data, error } = yield call(api.getCartItems);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      yield put(actions.fetchCartItemSuccess(data));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* updateCartDB() {
  console.log('--- updateCartDB()');
  const changedItem = yield select(getChangedCartItem);
  try {
    if (changedItem.quantity === 0) {
      yield call(api.deleteCartItem, changedItem);
    } else {
      yield call(api.updateCart, changedItem);
    }
  } catch (e) {
    console.error(e);
  }
}

const cartSagas = [
  takeEvery(actionTypes.FETCH_CART_ITEM_REQUEST, fetchCartItems),
  takeEvery(actionTypes.ADD_ITEM, updateCartDB),
  takeEvery(actionTypes.REMOVE_ITEM, updateCartDB),
];
export default cartSagas;
