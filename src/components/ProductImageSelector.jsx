'use client';

import React, { useState } from 'react';
import { v4 } from 'uuid';

function ProductImageSelector({ images }) 
{
    const [imageIndex, setImageIndex] = useState(0);

    const handleThumbnailMouseEnter = ({ target: { dataset: { index } } }) =>
    {
        setImageIndex(index);
    }

    return (
        <>
            <div className='product-thumbnails'>
            {
                images.map((image, index) =>
                    <div onMouseEnter={handleThumbnailMouseEnter} key={v4()} data-index={index} className='product-thumbnail-container'>
                        <img data-index={index} className='product-thumbnail' src={image} alt='product-thumb'/>
                    </div>
                )
            }
            </div>

            <div className='product-image-container'>
                <img src={images[imageIndex]} alt='product-image'/>
            </div>
        </>
    )
}

export default ProductImageSelector