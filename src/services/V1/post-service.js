import { Api, ApiKey } from '../api-service';

const getListPostsService = async (page = '1') => {
  const { data } = await Api.get(`/top-headlines?country=br&apiKey=${ApiKey}&category=business&pageSize=10`);

  return data;
};

export { getListPostsService };
