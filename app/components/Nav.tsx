'use client'

import { FaCartShopping } from "react-icons/fa6";
import { GiCoffeeBeans } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";
import { useProductContext } from "../Context/CartContext";

type Props = {}

export default function Nav({}: Props) {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpening = () => {
    setModalOpen(!modalOpen)
  }

  const { products } = useProductContext();
  const totalProductCount = products.reduce((totalCount, product) =>
    totalCount + product.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full h-[50px] shadow-md bg-gray-700 flex justify-between items-center p-5 text-white">
      <Link href='/'>
        <GiCoffeeBeans />
      </Link>
      <div className="flex items-center gap-2">
        <button 
          onClick={handleModalOpening}
          className="p-2 flex items-center justify-center rounded-full h-8 w-8 hover:bg-gray-400 relative cursor-pointer"
          >
          <span className="absolute top-0 right-0 bg-red-500 rounded-full p-1 text-xs h-4 w-4 flex justify-center items-center"
            >{totalProductCount}</span>
          <FaCartShopping />
        </button>
      </div>

      <CartModal modalOpen={modalOpen} handleModalOpening={handleModalOpening} />
    </nav>
  )
}