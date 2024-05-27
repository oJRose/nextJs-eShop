'use client'

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./db/firebaseConfig";
import  Gallery  from './components/Gallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductType } from "./Types/productType";

export default function Home() {

  const [dataProducts, setDataProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const productsCollection = collection(db, 'Products');
    const productsSnapshot = await getDocs(productsCollection);
    const productsData = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as ProductType[]

    setDataProducts(productsData)
  }

  console.log(dataProducts)

  return (
    <>
      <ToastContainer />
      <Gallery dataProducts={dataProducts} />
    </>
  );
}
