import { Api, ApiKey } from "../api-service";

const getListPosts = async (category = "frontend") => {
  const { data } = await Api.get(`/everything?q=${category}&apiKey=${ApiKey}`);
  return data;
};

export { getListPosts };
