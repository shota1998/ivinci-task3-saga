import * as actionTypes from '../actionTypes';

const initialState = {
  items: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_CART_REDUCER: {
      console.log('---UPDATE_CART_REDUCER---');
      const items = action.payload.items;
      var total = 0;
      for (const item of items) {
        total += item.quantity;
      }

      return {
        ...state,
        items: items,
        total: total,
      };
    }

    default:
      return state;
  }
}
