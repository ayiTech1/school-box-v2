"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-[0.85rem] lg:text-sm font-semibold capitalize text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`relative group hover:text-shop_light_green hoverEffect ${
            pathname === item?.href && "text-shop_light_green"
          }`}
        >
          {item?.title}
          {/* underline animation */}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default HeaderMenu;
