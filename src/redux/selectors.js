import itemSagas from './sagas/items';

export const getItemState = (store) => store.item;

export const getItemList = (store) =>
  getItemState(store) ? getItemState(store).items : [];

export const getCartState = (store) => store.cart;

export const getCartItems = (store) => {
  return getCartState(store).items;
};

export const getOneQuantity = (store, id) => {
  const items = getCartState(store).items;
  for (const item of items) {
    if (item.id === id) {
      return item.quantity;
    }
  }
  return 0;
};

export const getTotalhQuantity = (store) =>
  getCartState(store) ? getCartState(store).total : [];
