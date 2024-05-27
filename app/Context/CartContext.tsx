'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { ProductType } from "../Types/productType";

interface ProductsContextType {
    products: ProductType[];
    addToCart: (product: ProductType) => void;
    incrementQuantity: (productId: string) => void;
    decrementQuantity: (productId: string) => void;
    removeFromCart: (productId: string) => void;
}

interface ProductsProviderProps {
    children: ReactNode
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

//===========================================================
export const ProductsProvider: React.FC<ProductsProviderProps> = ({children}) => {

    const [products, setProducts] = useState<ProductType[]>([]);

    //==================
    const addToCart = (product: ProductType) => {
        const alreadyInCartIndex = products.findIndex((item) => item.id === product.id);

        if(alreadyInCartIndex !== -1) {
            const updatedCart = [...products];
            updatedCart[alreadyInCartIndex].quantity += 1;
            setProducts(updatedCart);
        } else {
            setProducts([...products, {...product, quantity: 1}]);
        }
    }

    //==================
    const decrementQuantity = (productId: string) => {
        const updatedCart = products.map((product) => {
            if(product.id === productId) {
                if(product.quantity > 1) {
                    return {...product, quantity: product.quantity - 1}
                } else {
                    return null
                }
            }
            return product;
        }).filter(product => product !== null) as ProductType[];
        setProducts(updatedCart);
    }

    //==================
    const incrementQuantity = (productId: string) => {
        setProducts(prevProducts => prevProducts.map(product => 
            product.id === productId ? 
                {...product, quantity: product.quantity + 1}
                :
                product
        ))
    }

    //==================> 
    const removeFromCart = (productId: string) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    //===========================
    return (
        <ProductsContext.Provider value={{products, addToCart, removeFromCart, decrementQuantity, incrementQuantity}}>
            {children}
        </ProductsContext.Provider>
    )
}

//===========================//===========================
export const useProductContext= () => {
    const context = useContext(ProductsContext);
    if(!context) {
        throw new Error ('Erreur')
    }
    return context
}