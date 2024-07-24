import axios from 'axios';

const baseURL = false
  ? 'http://localhost:8001'
  : 'https://mpfb-dating-app-mern-backend-1885bda2f45c.herokuapp.com/';
console.log(baseURL);

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
