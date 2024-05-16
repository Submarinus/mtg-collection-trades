import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";

const Wishlist = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>My wishlist</h1>
      <p>Here you will be able to upload and view your wishlist</p>
    </Layout>
  );
};

export default Wishlist;
