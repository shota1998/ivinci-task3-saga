export const getCartState = (store) => store.cart;

export const getItemList = (store) =>
  getCartState(store) ? getCartState(store).items : [];

export const getTotalPurchace = (store) =>
  getCartState(store) ? getCartState(store).total : [];

export const getItemQuantity = (store, id) =>
  getCartState(store)[id] ? getCartState(store)[id].quantity : [];
