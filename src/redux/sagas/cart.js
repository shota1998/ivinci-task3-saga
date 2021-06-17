import { call, put, takeEvery, select } from 'redux-saga/effects';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import * as selector from '../selectors';
import * as api from '../api/cart';

export function* fetchCartItems() {
  console.log('--- fetchCartItems()');
  try {
    const { data, error } = yield call(api.getCartItems);

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      yield put(actions.updateCartReducer(data));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* addItem(action) {
  console.log('--- addItem(action)');
  var cartItems = yield select(selector.getCartItems);
  var addedItem = JSON.parse(JSON.stringify(action.payload.item));
  var isNew = true;

  for (var item of cartItems) {
    if (item.id === addedItem.id) {
      item.quantity++;
      isNew = false;
      break;
    }
  }

  if (isNew) {
    cartItems.push(addedItem);
  }

  yield put(actions.updateCartReducer(cartItems));

  try {
    yield call(api.updateCart, cartItems);
  } catch (e) {
    console.error(e);
  }
}

export function* removeItem(action) {
  console.log('--- removeItem(action)');
  var cartItems = yield select(selector.getCartItems);
  var removedItem = JSON.parse(JSON.stringify(action.payload.item));
  var isZero = false;

  cartItems.forEach((item, index) => {
    if (item.id === removedItem.id) {
      item.quantity--;
      if (item.quantity === 0) {
        cartItems.splice(index, 1);
        isZero = true;
      }
    }
  });

  yield put(actions.updateCartReducer(cartItems));

  try {
    if (isZero) {
      yield call(api.deleteCartItem, removedItem);
    } else {
      yield call(api.updateCart, cartItems);
    }
  } catch (e) {
    console.error(e);
  }
}

const cartSagas = [
  takeEvery(actionTypes.FETCH_CART_ITEM_REQUEST, fetchCartItems),
  takeEvery(actionTypes.ADD_ITEM, addItem),
  takeEvery(actionTypes.REMOVE_ITEM, removeItem),
];
export default cartSagas;
