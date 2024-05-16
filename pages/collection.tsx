import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";

const Collection = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>My Collection</h1>
      <p>Here you will be able to upload and view your collection</p>
    </Layout>
  );
};

export default Collection;
