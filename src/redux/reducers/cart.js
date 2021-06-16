import * as actionTypes from '../actionTypes';

const initialState = {
  items: [],
  total: 0,
  changedItem: {},
};

export default function cartReducer(state = initialState, action) {
  var cpItems = state.items;
  var cpTotal = state.total;
  var changedItem = {};

  switch (action.type) {
    case actionTypes.FETCH_CART_ITEM_SUCCESS: {
      console.log('---FETCH_CART_ITEM_SUCCESS---');
      cpItems = action.payload.items;
      for (const cpItem of cpItems) {
        cpTotal += parseInt(cpItem.quantity);
      }

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    case actionTypes.ADD_ITEM: {
      console.log('---ADD_ITEM---');
      const addedItem = JSON.parse(JSON.stringify(action.payload.item));
      var isNew = true;

      for (var cpItem of cpItems) {
        if (cpItem.id === addedItem.id) {
          cpItem.quantity++;
          changedItem = cpItem;
          isNew = false;
          break;
        }
      }

      if (isNew) {
        addedItem.quantity++;
        changedItem = addedItem;
        cpItems.push(addedItem);
      }
      cpTotal++;

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
        changedItem: changedItem,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      console.log('---REMOVE_ITEM---');
      const id = action.payload.id;

      cpItems.forEach((cpItem, index) => {
        if (cpItem.id === id) {
          cpItem.quantity--;
          cpTotal--;
          changedItem = cpItem;
          if (cpItem.quantity === 0) {
            cpItems.splice(index, 1);
          }
        }
      });

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
        changedItem: changedItem,
      };
    }
    default:
      return state;
  }
}
