import React, { useState, useEffect } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function ProductStars( { rating } ) 
{
    const [starArray, setStarArray] = useState([]);

    const getStars = () =>
    {
        const stars = [];

        const ratingString = rating.toString();
        const integerStars = parseInt(ratingString[0]);

        for(let i = 0; i < integerStars; i++)
        {
            stars.push(1);
        }

        const decimalStar = parseInt(ratingString[2]);

        stars.push(decimalStar);

        if(stars.length < 5)
        {
            const missingStars = 5 - stars.length;

            for(let i = 0; i < missingStars; i++)
            {
                stars.push(0);
            }
        }

        setStarArray(stars)
    }

    useEffect(() =>
    {
        getStars();
    }, [])

    return (
        <div className='product-stars'>
            {
                starArray.map(star => {
                    if(star === 1) return <BsStarFill className='product-star'/>
                    if(star >= 0.2) return <BsStarHalf className='product-star'/>
                    if(star <= 0) return <BsStar className='product-star'/>
                })
            }
        </div>
    )
}

export default ProductStars