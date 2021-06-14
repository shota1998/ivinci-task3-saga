import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { getItems } from '../api/items';

export function* fetchProducts() {
  console.log('--- fetchProducts()');
  try {
    const { data, error } = yield call(getItems);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      yield put(actions.fetchItemSuccess(data));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchProducts() {
  console.log('--- watchFetchProducts()');
  yield takeEvery(actionTypes.FETCH_ITEM_REQUEST, fetchProducts);
}

const itemSagas = [call(watchFetchProducts)];
export default itemSagas;
