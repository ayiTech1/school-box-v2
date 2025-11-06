import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex items-center">
      <h2
        className={cn(
          // Responsive font sizes
          "text-xl sm:text-2xl lg:text-3xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green transition-all duration-200 ease-in-out group font-sans",
          className
        )}
      >
        School
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green transition-colors duration-200 ease-in-out",
            spanDesign
          )}
        >
          Box
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
