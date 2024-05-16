import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";

const Upload = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>My Upload</h1>
      <p>
        Here you will be able to upload your collection and wishlist. Make sure
        to name your wishlist "WishlistCheck" for the app to recognize it.
      </p>
    </Layout>
  );
};

export default Upload;
