import * as actionTypes from '../actionTypes';

const initialState = {
  items: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  var cpItems = state.items;
  var cpTotal = state.total;

  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      console.log('---ADD_ITEM---');
      const addedItem = JSON.parse(JSON.stringify(action.payload.item));
      var isNew = true;

      for (var cpItem of cpItems) {
        if (cpItem.id === addedItem.id) {
          cpItem.quantity++;
          isNew = false;
          break;
        }
      }

      if (isNew) {
        addedItem.quantity++;
        cpItems.push(addedItem);
      }
      cpTotal++;

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      console.log('---REMOVE_ITEM---');
      const id = action.payload.id;

      cpItems.forEach((cpItem, index) => {
        if (cpItem.id === id) {
          cpItem.quantity--;
          cpTotal--;

          if (cpItem.quantity === 0) {
            cpItems.splice(index, 1);
          }
        }
      });

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    default:
      return state;
  }
}
