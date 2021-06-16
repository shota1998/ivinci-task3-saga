import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:8080/items',
});

export const getItems = () =>
  myAxios
    .get('/list')
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
