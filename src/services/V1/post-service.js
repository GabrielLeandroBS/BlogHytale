import { Api, ApiKey } from "../api-service";

const getListPosts = async (page = '1') => {
  const { data } = await Api.get(`/everything?q=frontend&apiKey=${ApiKey}&page=${page}`);
  return data;
};

export { getListPosts };
