'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';

function ProductsGrid() 
{
    const [products, setProducts] = useState([]);
    
    const getProducts = async () =>
    {
        const res = await fetch('https://dummyjson.com/products?limit=50');
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() =>
    {
        getProducts();
    }, [])

    return (

        <div className="mt-5 px-5">

            <div className="flex items-center justify-center py-2 rounded-md shadow-md bg-blueOne text-white">
                <h2>✨ ¡Descubre! 🔍</h2>
            </div>

            <div className="products-grid">
            
            {products.map(product =>
                <Link href={'/products/'+product.id} key={v4()}>
                    <div className='products-grid-card'>
                        <div className='products-grid-img-container'>
                            <img className='products-grid-img' src={product.thumbnail}/>
                        </div>
                        
                        <div className='products-grid-info'>
                            <p className='font-semibold'>{product.title.slice(0, 30) + `${product.title.length > 50 ? '...' : ''}`}</p>
                            <p>{product.description.slice(0, 50) + `${product.description.length > 50 ? '...' : ''}`}</p>
                            <label className='products-grid-price'>💵 {product.discountPercentage <= 0 ? product.price : (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</label>
                            <label className='products-grid-vendor'>{product.brand}</label>
                        </div>
                    </div>
                </Link>
            )}

            </div>

        </div>
    )
}

export default ProductsGrid