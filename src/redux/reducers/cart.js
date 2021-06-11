import * as actionTypes from '../actionTypes';

const initialState = {
  quantity: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  var cpQuantity = state.quantity;
  var cpTotal = state.total;

  switch (action.type) {
    case actionTypes.INIT_CART: {
      console.log('---INIT_CART---');
      const newArray = new Array(action.payload).fill(0);
      cpQuantity = newArray;

      return {
        ...state,
        quantity: cpQuantity,
      };
    }
    case actionTypes.ADD_ITEM: {
      console.log('---ADD_ITEM---');
      const id = action.payload;
      cpQuantity[id]++;
      cpTotal++;

      return {
        ...state,
        quantity: cpQuantity,
        total: cpTotal,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      console.log('---REMOVE_ITEM---');
      const id = action.payload;

      if (cpQuantity[id] !== 0) {
        cpQuantity[id]--;
        cpTotal--;
      }

      return {
        ...state,
        quantity: cpQuantity,
        total: cpTotal,
      };
    }
    default:
      return state;
  }
}
