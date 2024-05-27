import { ProductType } from "../Types/productType";
import { toast } from "react-toastify";
import { BiWorld } from "react-icons/bi";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { RiRedPacketFill } from "react-icons/ri";
import { useProductContext } from '../Context/CartContext';

interface itemProps  {
    item: ProductType
}

export default function ProductCard({item}: itemProps) {

  const {addToCart} = useProductContext();

  const handleAddToCart = () => {
    addToCart(item)
    toast.success(`x1 ${item.name} Added To In Your Cart :)`)
  }

  return (
    <div className="bg-white text-black rounded-lg shadow-md p-4 relative z-[50px] flex flex-col justify-between gap-3">

        <div className="bg-orange-500 text-white absolute top-2 right-2 rounded-full p-2">
          {item.price}€
        </div>
        <img src={item.image} alt={item.name} className="w-full object-cover justify-between gap-2" />
        <div className="text-gray-700 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1"><RiRedPacketFill />Quantity:</span>
          <p>{item.weight}g /pack</p>
        </div>


        <div className="text-gray-700 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1"><BiWorld />Origin:</span>
          <p>{item.country}</p>
        </div>

        <div className="text-gray-700 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1"><PiCoffeeBeanFill />Strength:</span>
          <p>{item.strength} /5</p>
        </div>

        <button 
          onClick={handleAddToCart}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md ">
          Add To Cart
        </button>
    </div>
  )
}
