import axios from 'axios';

export const getItems = () =>
  axios
    .get('http://localhost:8080/items/list')
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
