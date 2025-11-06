import React from "react";
import Container from "./container";
import Logo from "./logo";
import HeaderMenu from "./header-menu";
import SearchBar from "./search-bar";
import CartIcon from "./cart-icon";
import FavoriteButton from "./favorite-button";
import SignIn from "./sign-in";
import MobileMenu from "./mobile-menu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 sm:py-4">
      <Container className="flex items-center justify-between text-lightColor">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="block md:hidden">
            <MobileMenu />
          </div>
          <Logo />
        </div>

        {/* Center: Menu (Hidden on mobile) */}
        <HeaderMenu />

        {/* Right: Icons & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Hide search on small screens */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          <CartIcon />
          <FavoriteButton />

          {user && (
            <Link
              href={"/orders"}
              className="relative hover:text-shop_light_green transition-colors"
            >
              <Logs className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-[10px] font-semibold flex items-center justify-center">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          )}

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
