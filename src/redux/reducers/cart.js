import * as actionTypes from '../actionTypes';

const initialState = {
  items: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_CART_REDUCER: {
      console.log('---UPDATE_CART_REDUCER---');

      return {
        ...state,
        items: action.payload.cart.items,
        total: action.payload.cart.total,
      };
    }

    default:
      return state;
  }
}
