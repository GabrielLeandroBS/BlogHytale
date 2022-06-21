import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { getListPostsTopHeadLinesService } from '../../services/V1/post-service';
import Card from '../Card';
import gradient from '../../assets/images/gradient.jpg';

export default function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  function WrapperBox({ children }) {
    return (
      <div
        style={{
          display: 'block',
          marginBottom: '1.25rem',
          width: '100%',
        }}
      >
        {children}
      </div>
    );
  }

  const getListPosts = async () => {
    try {
      setIsLoading(true);
      const { articles } = await getListPostsTopHeadLinesService();
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
    <section role="feed" className="c-articles">
      <div className="c-articles__wrapper">
        {!isLoading ? (
          posts.map(
            ({
              publishedAt: published,
              title,
              description,
              urlToImage: image,
              url,
            }) => (
              <Card
                key={title}
                slug={url}
                date={published}
                title={title}
                subtitle={description}
                image={image ? image : gradient}
                alt={title}
              />
            )
          )
        ) : (
          <Skeleton count={5} height={358} wrapper={WrapperBox} />
        )}
      </div>
    </section>
  );
}
