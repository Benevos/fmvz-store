import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchDialog from '@/components/SearchDialog';
import SingleProduct from '@/components/SingleProduct';
import TopFiller from '@/components/TopFiller';
import React from 'react'

async function Product({ params }) 
{
    const res = await fetch('https://dummyjson.com/products/'+params.id);
    const product = await res.json();

    return (
        <div>
            <SearchDialog/>
            <Header/>
            <TopFiller/>
            <Navbar/>
            <SingleProduct product={product}/>
            <Footer/>
        </div>
    )
}

export default Product