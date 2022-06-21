import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://newsapi.org/v2',
});
