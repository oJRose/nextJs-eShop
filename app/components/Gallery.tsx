import { ProductType } from "../Types/productType";
import  ProductCard  from "./ProductCard";



interface GalleryProps {
  dataProducts: ProductType[]
}

export default function Gallery({dataProducts}: GalleryProps) {
  return (
    <div className="max-w-[1000px] w-full mx-auto p-5 mt-[90px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataProducts.map((item) => (
            <ProductCard key={item.id} item={item}/>
        ))}

      </div>
    </div>
  )
}