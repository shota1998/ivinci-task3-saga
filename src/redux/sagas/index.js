import { all } from 'redux-saga/effects';
import itemSagas from './items';

export default function* rootSaga() {
  yield all([itemSagas()]);
}
