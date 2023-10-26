'use client';

import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';

function Products() 
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

            <div className="flex items-center justify-center py-2 rounded-md shadow-md bg-blue-900 text-white">
                <h2 className="font-light">✨ ¡Descubre! 🔍</h2>
            </div>

            <div className="products-grid">
            
            {products.map(product =>
                <div key={v4()} className='product-card'>
                    <div className='product-img-container'>
                        <img className='product-img' src={product.thumbnail}/>
                    </div>
                    
                    <div className='products-info'>
                        <p>{product.description.slice(0, 50) + `${product.description.length > 50 ? '...' : ''}`}</p>
                        <label className='product-price'>{'💵' + product.price}</label>
                        <label className='product-vendor'>{product.brand}</label>
                    </div>
                </div>
            )}

            </div>

        </div>
    )
}

export default Products