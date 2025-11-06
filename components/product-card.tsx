import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@sanity/icons";
import { Flame } from "lucide-react";
import PriceView from "./price-view";
import Title from "./title";
import ProductSideMenu from "./product-side-menu";
import AddToCartButton from "./add-to-cart-button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border rounded-md border-darkBlue/20 group bg-white">
      {/* Image Section */}
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`w-full 
                h-48 sm:h-56 md:h-64 object-contain transition-transform duration-500 bg-shop_light_bg
                ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}

        <ProductSideMenu product={product} />

        {product?.status === "sale" ? (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-lightGreen hover:text-shop_dark_green hoverEffect">
            Sale!
          </p>
        ) : (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>

      {/* Text Section */}
      <div className="p-2 sm:p-1 flex flex-col gap-1.5 sm:gap-1">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
            {product.categories
              .map((cat) =>
                typeof cat === "string"
                  ? cat
                  : (cat as any)?.title ?? (cat as any)?._ref ?? ""
              )
              .filter(Boolean)
              .join(", ")}
          </p>
        )}

        <Title className="text-sm line-clamp-1">{product?.name}</Title>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={index < 4 ? "text-shop_light_green" : "text-lightText"}
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-lightText text-xs tracking-wide">5 Reviews</p>
        </div>

        <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock</p>
          <p
            className={`${
              product?.stock === 0
                ? "text-red-600"
                : "text-shop_dark_green/80 font-semibold"
            }`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>

        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
