import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { getCartItems } from '../api/cart';

export function* fetchCartItems() {
  console.log('--- fetchCartItems()');
  try {
    const { data, error } = yield call(getCartItems);
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

export function* addItemDB() {
  console.log('--- addItemDB()');
}

const cartSagas = [
  takeEvery(actionTypes.FETCH_CART_ITEM_REQUEST, fetchCartItems),
  takeEvery(actionTypes.ADD_ITEM, addItemDB),
];
export default cartSagas;
