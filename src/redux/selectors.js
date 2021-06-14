export const getItemState = (store) => store.item;

export const getItemList = (store) =>
  getItemState(store) ? getItemState(store).items : [];

export const getCartState = (store) => store.cart;

export const getCartItems = (store) => {
  return getCartState(store).items;
};

export const getOneQuantity = (store, id) => {
  console.log(id);
  return getCartState(store).quantity[id]
    ? getCartState(store).quantity[id]
    : [];
};

export const getTotalhQuantity = (store) =>
  getCartState(store) ? getCartState(store).total : [];
