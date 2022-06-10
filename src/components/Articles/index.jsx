import { useEffect, useState } from 'react';

import { getListPostsService } from '../../services/V1/post-service';
import Card from '../Card';
import gradient from '../../assets/images/gradient.jpg';

export default function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getListPosts = async () => {
    try {
      setIsLoading(true);
      const { articles } = await getListPostsService();
      setPosts(articles);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getListPosts();
    })();
  }, []);

  return (
    <section className="c-articles">
      <div className="c-articles__wrapper">
        {!isLoading
          ? posts.map(
            ({
              publishedAt: published,
              title,
              description,
              urlToImage: image,
              url,
            }) => (
              <Card
                slug={url}
                date={published}
                title={title}
                subtitle={description}
                image={image ? image : gradient}
                alt={title}
              />
            )
          )
          : 'Loading'}
      </div>
    </section>
  );
}
