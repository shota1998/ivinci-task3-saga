import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import { getItems } from '../api/items';

export default function* fetchProducts() {
  try {
    const { data, error } = yield call(getItems);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      yield put(actions.fetchItemSuccess(data));
      yield put(actions.initCart(data.length));
    }
  } catch (e) {
    console.error(e);
  }
}

// const itemSagas = [all(fetchProducts())];

// export default itemSagas;
