import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Caro from "@/components/Carousel";
import ProductsGrid from "@/components/ProductsGrid";
import TopFiller from "@/components/TopFiller";
import SearchDialog from "@/components/SearchDialog";
import Footer from "@/components/Footer";


export default async function Home() 
{
  return (
    <div>
      <SearchDialog/>
      <Header/>     
      
      <TopFiller/>
      <Navbar/>
      <Caro/>

      <ProductsGrid/>
      
      <Footer/>
    </div>
  )
}
