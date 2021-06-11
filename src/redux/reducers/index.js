import { combineReducers } from 'redux';
import cartReducer from './cart';
import itemReducer from './item';

export default combineReducers({
  cart: cartReducer,
  item: itemReducer,
});
