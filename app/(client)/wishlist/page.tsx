import NoAccess from "@/components/no-access";
import WishListProducts from "@/components/wish-list-products";
import { currentUser } from "@clerk/nextjs/server";


const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
      )}
    </>
  );
};

export default WishListPage;
