import * as actionTypes from '../actionTypes';

const initialState = {
  items: [
    {
      id: 0,
      title: 'sampleTitle0',
      value: 3.0,
      description: 'sampleDescription0',
      quantity: 0,
    },
    {
      id: 1,
      title: 'sampleTitle1',
      value: 5.0,
      description: 'sampleDescription1',
      quantity: 0,
    },
  ],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  var cpItems = state.items;
  var cpTotal = state.total;

  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const id = action.payload;
      cpItems[id].quantity++;
      cpTotal++;

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      const id = action.payload;

      if (cpItems[id].quantity !== 0) {
        cpItems[id].quantity--;
        cpTotal--;
      }

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    case actionTypes.FETCH_ITEM_SUCCESS: {
      console.log('---FETCH_ITEM_SUCCESS---');
    }
    default:
      return state;
  }
}
