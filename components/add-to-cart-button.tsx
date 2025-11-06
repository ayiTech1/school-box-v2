"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./price-formatter";
import QuantityButtons from "./quantity-buttons";

interface Props {
  product: Product | any;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(`${product?.name?.substring(0, 12)}... added successfully!`);
    } else {
      toast.error("Cannot add more than available stock");
    }
  };

  return (
    <div className="w-full min-h-[3rem] flex flex-col sm:flex-row sm:items-center gap-2">
      {itemCount ? (
        <div className="w-full text-sm sm:text-base">
          {/* Quantity Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs sm:text-sm text-darkColor/80">Quantity</span>
            <QuantityButtons product={product} />
          </div>

          {/* Subtotal Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-1 mt-1 gap-1">
            <span className="text-xs sm:text-sm font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={cn(
            "w-full flex items-center justify-center gap-2 bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green transition-all duration-200 active:scale-[0.98]",
            "text-sm sm:text-base py-2 sm:py-3 rounded-lg",
            className
          )}
        >
          <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
