import React from 'react'
import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useProductContext } from '../Context/CartContext';

type Props = {
    modalOpen: boolean;
    handleModalOpening: () => void
}

const CartModal = ({modalOpen, handleModalOpening}: Props) => {

  const {products, decrementQuantity, incrementQuantity, removeFromCart} = useProductContext();

  const totalPrice = products.reduce((total, product) => total + 
    (product.price * product.quantity), 0);
  

  return (
    <>
        {modalOpen && ( 
            <div className=' bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 absolute top-[200%] left-[40%] h-[450px] w-[350px] overflow-y-auto'>
                <span className='text-gray-700 text-4xl float-end cursor-pointer'><IoIosClose onClick={handleModalOpening} /></span>

                <div className='p-4 '>
                    <h2 className='text-xl font-bold mb-4 text-gray-700'>Cart</h2>

                    <div className='grid gap-4'>
                      {products.length === 0 ?
                        (
                          <p>Your Cart Is Empty</p>
                        ) : (
                        products.map((product) => (
                          <div key={product.id} className='text-white bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-4'>
                            <div className='flex items-center gap-4'>
                              <Image src={product.image} alt={product.description} width={50} height={50}/>
                              <div>
                                <h3 className='text-lg'>{product.name}</h3>
                                <p className='text-sm'>Quantity: <span className='font-bold text-gray-400'>{product.quantity}</span></p>
                                <p className='text-sm'>Price: <span className='font-bold text-gray-400'>{product.price}€  /Pack</span></p>
                                <div className='flex items-center gap-2'>
                                  <button 
                                    onClick={() => decrementQuantity(product.id)}
                                    className='h-6 w-6 bg-slate-500 hover:bg-slate-600 rounded-md mt-2'>-</button>
                                  <button 
                                    onClick={() => incrementQuantity(product.id)}
                                    className='h-6 w-6 bg-slate-500 hover:bg-slate-600 rounded-md mt-2'>+</button>
                                  <button 
                                    onClick={() => removeFromCart(product.id)}
                                    className='text-sm h-6 w-6 bg-slate-500 hover:bg-slate-600 rounded-md mt-2 grid place-items-center'><FaTrash /></button>
                                </div>
                              </div>

                            </div>
                          </div>
                        )))
                        
                      }
                      <p className='w-full bg-gray-800 rounded-md p-3 opacity-75'>Total: {totalPrice}€</p>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default CartModal