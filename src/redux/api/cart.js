import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:8080/cart',
});

export const getCartItems = () =>
  myAxios
    .get('/list')
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });

export const updateCart = (items) =>
  myAxios
    .post('/', items)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

export const deleteCartItem = (item) =>
  myAxios
    .delete('/', { data: item })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
