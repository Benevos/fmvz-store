import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Caro from "@/components/Carousel";
import Products from "@/components/Products";


export default async function Home() 
{
  return (
    <div>
      <Header/>     
      <Navbar/>
      <Caro/>

      <Products/>
      
    </div>
  )
}
