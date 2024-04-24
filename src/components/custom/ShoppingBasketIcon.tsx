"use client";
import Link from "next/link";
import React from "react";
import { ShoppingBasket } from "lucide-react";
import { useAppSelector } from "@/lib/store/hooks";

const ShoppingBasketIcon = () => {
  const items = useAppSelector((store) => store.cart.items);
  return (
    <div className="relative">
      <Link href={"/cart"}>
        <ShoppingBasket className="hover:text-primary" />
      </Link>

      <span className="absolute -top-4 -right-5 w-6 h-6 flex items-center justify-center rounded-full bg-orange-600 font-bold text-white">
        {items.length}
      </span>
    </div>
  );
};

export default ShoppingBasketIcon;
