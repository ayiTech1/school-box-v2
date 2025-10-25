import Container from "@/components/container";
import HomeBanner from "@/components/home-banner";
import HomeCategories from "@/components/home-categories";
import LatestBlog from "@/components/latest-blog";
import ProductGrid from "@/components/product-grid";
import ShopByBrands from "@/components/shop-by-brands";
import { getCategories } from "@/sanity/queries";

import React from "react";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />  
    </Container>
  );
};

export default Home;
