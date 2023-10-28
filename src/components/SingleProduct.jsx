'use client';

import React from 'react';
import ProductImageSelector from './ProductImageSelector';
import ProductStars from './ProductStars';
import BuyButtonPlaceholder from './BuyButtonPlaceholder';

function SingleProduct({ product }) 
{
    return (
        <div className='product'>
            <div className='product-container'>
                
                <ProductImageSelector images={product.images}/>

                <div className='product-info'>
                    <div>
                        <label className='text-sm text-slate-600'>{product.brand}</label>
                        
                        <h2 className='product-info-title'>{product.title}</h2>

                        <div className='product-rating'>
                            <label className='text-slate-600 mr-2'>{product.rating.toFixed(1)}</label>

                            <ProductStars rating={product.rating}/>
                        </div>
                        
                        {
                            product.discountPercentage <= 0 ? <></> : <div className='line-through font-normal text-xl text-red-600'><label className='product-discount'>$ {product.price}</label></div>
                        }
                        
                        <label className='text-5xl font-light'>💵{product.discountPercentage <= 0 ? product.price : (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</label> <label className='text-greemOne font-medium'>%{product.discountPercentage} OFF!</label>

                        <p className='mt-4'>{product.description}</p>
                    </div>

                    <BuyButtonPlaceholder/>
                </div>
            
            </div>
        </div>
    );
}

export default SingleProduct;