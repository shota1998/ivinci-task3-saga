import { all } from 'redux-saga/effects';
import itemSagas from './items';
import cartSagas from './cart';

export default function* rootSaga() {
  console.log('--- rootSaga()');
  yield all([...itemSagas, ...cartSagas]);
}
