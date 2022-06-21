import { Api } from '../api-service';

const ApiKey = import.meta.env.VITE_API_KEY;

const getListPostsTopHeadLinesService = async () => {
  const { data } = await Api.get(
    `/top-headlines?country=br&apiKey=${ApiKey}&category=business&pageSize=10`
  );

  console.log(data);
  return data;
};

const getListPostsEverythingService = async (theme = 'bitcoin') => {
  const results = await Api.get(`/everything?q=${theme}&apiKey=${ApiKey}`);

  return results;
};

export { getListPostsTopHeadLinesService, getListPostsEverythingService };
