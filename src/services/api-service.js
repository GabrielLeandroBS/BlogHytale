import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const ApiKey = 'a2947d8af88b4bf4b191a1c51e5698d0'