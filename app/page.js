"use client"
import Customers from "./components/customer/Customers";
import Delivery from "./components/delivery/Delivery";
import Faqsection from "./components/faq/Faqsection";
import Footer from "./components/footer/footer";
import Shop from "./components/shop/shop";

import ProductPage from "./product/page";


export default function Home(){
  return (
    <>
    <ProductPage/>
    <Shop/>
   <Delivery/>
   <Customers/>
   <Faqsection/>
   <Footer/>
    </>
  )
}