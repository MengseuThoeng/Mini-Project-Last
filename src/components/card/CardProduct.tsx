"use client";
import { Card } from "flowbite-react";
import { CartProductType, ProductType } from "@/lib/defination";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { useAppDispatch } from "@/redux/hooks";
import { increment } from "@/redux/features/counter/counterSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/service/product";
import { useRouter } from "next/navigation";
import { NavbarMenuToggle } from "@nextui-org/react";

export default function CardProduct({
  id,
  name,
  price,
  image,
  onClick,
}: CartProductType) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(increment());
    dispatch(addToCart({ id, name, image, price }));
    
  };
  
  

  return (
    <>
      <section className="group relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <a href={'/product/' + id}>
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        </a>

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-black px-3 text-white py-1.5 text-xs font-medium">
            {" "}
            New{" "}
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

          <p className="mt-1.5 text-sm text-gray-700">{price}$</p>

          <div className="mt-4">
            <button
              onClick={() => {
                handleAddToCart();
              }}
              className="block w-full rounded bg-black p-4 text-sm text-white font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
