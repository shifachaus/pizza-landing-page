"use client";
import { add } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import React from "react";

const AddToCart = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (productId: string) => {
    dispatch(add(productId));

    console.log("Adding to cart", productId);
  };
  return (
    <button onClick={() => handleAddToCart(productId)}>Add to cart</button>
  );
};

export default AddToCart;
