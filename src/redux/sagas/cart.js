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
      var total = 0;

      for (const item of data) {
        total += parseInt(item.quantity);
      }

      const newCart = { items: data, total: total };
      yield put(actions.updateCartReducer(newCart));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* addItem(action) {
  console.log('--- addItem(action)');
  var cartItems = yield select(selector.getCartItems);
  var total = yield select(selector.getCartTotal);
  var addedItem = JSON.parse(JSON.stringify(action.payload.item));
  var isNew = true;

  for (var item of cartItems) {
    if (item.id === addedItem.id) {
      item.quantity++;
      addedItem = item;
      isNew = false;
      break;
    }
  }

  if (isNew) {
    addedItem.quantity++;
    cartItems.push(addedItem);
  }
  total++;

  const newCart = {
    items: cartItems,
    total: total,
  };

  yield put(actions.updateCartReducer(newCart));

  try {
    yield call(api.updateCart, addedItem);
  } catch (e) {
    console.error(e);
  }
}

export function* removeItem(action) {
  console.log('--- removeItem(action)');
  var cartItems = yield select(selector.getCartItems);
  var total = yield select(selector.getCartTotal);
  var removedItem = JSON.parse(JSON.stringify(action.payload.item));
  var isZero = false;

  cartItems.forEach((item, index) => {
    if (item.id === removedItem.id) {
      item.quantity--;
      removedItem.quantity--;
      if (item.quantity === 0) {
        cartItems.splice(index, 1);
        isZero = true;
      }
    }
  });
  total--;

  const newCart = {
    items: cartItems,
    total: total,
  };

  yield put(actions.updateCartReducer(newCart));

  try {
    if (isZero) {
      yield call(api.deleteCartItem, removedItem);
    } else {
      yield call(api.updateCart, removedItem);
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
