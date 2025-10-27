import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import Title from "@/components/title";
import { getDealProducts } from "@/sanity/queries";



const DealPage = async () => {
  const products = await getDealProducts();
  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-1 text-base uppercase tracking-wide">
          Hot Deals of the Week
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {products?.map((product: any) => (
            <ProductCard key={product?._id} product={product} />
          ))} 
        </div>
      </Container>
    </div>
  );
};

export default DealPage;
