import axios from 'axios';

export const getCartItems = () =>
  axios
    .get('http://localhost:8080/cart/list')
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
