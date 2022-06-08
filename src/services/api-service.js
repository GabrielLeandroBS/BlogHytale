import axios from "axios";

export const Api = axios.create({
  baseURL: "https://hytale.com/api/blog/post", 
});
