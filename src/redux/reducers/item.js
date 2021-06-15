import * as actionTypes from '../actionTypes';

const initialState = {
  items: [],
};

export default function itemReducer(state = initialState, action) {
  var cpItems = state.items;

  switch (action.type) {
    case actionTypes.FETCH_ITEM_SUCCESS: {
      console.log('---FETCH_ITEM_SUCCESS---');
      cpItems = action.payload.items;
      return {
        ...state,
        items: cpItems,
      };
    }
    default:
      return state;
  }
}
