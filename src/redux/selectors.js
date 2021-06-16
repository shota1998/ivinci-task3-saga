export const getItemState = (store) => store.item;

export const getItemList = (store) =>
  getItemState(store) ? getItemState(store).items : [];

export const getCartState = (store) => store.cart;

export const getCartItems = (store) => getCartState(store).items;

export const getChangedCartItem = (store) => {
  const changedItem = getCartState(store).changedItem;
  return changedItem;
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

export const getTotalQuantity = (store) =>
  getCartState(store) ? getCartState(store).total : [];
