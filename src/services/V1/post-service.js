import { Api, ApiKey } from "../api-service";

const getListPosts = async (category = "bitcoin") => {
  const { data } = await Api.get(
    `/everything?${category ? `q=${category}` : ""}&apiKey=${ApiKey}`
  );
  return data;
};

export { getListPosts };
