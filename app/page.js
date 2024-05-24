'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/products`)
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
      <>
        <div className='flex min-h-screen justify-center items-center p-8'>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
  );
}