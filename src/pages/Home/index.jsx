import { useEffect } from "react";
import Layout from "../../layout";
import { getListPosts } from "../../services/V1/post-service";

export default function Home() {
  const getListPostsTeste = async () => {
    const results = await getListPosts();

    console.log(results);
  };

  useEffect(() => {
    (async () => {
      await getListPostsTeste();
    })();
  }, []);

  return (
    <Layout>
      <h1>Olá mundo</h1>
    </Layout>
  );
}
