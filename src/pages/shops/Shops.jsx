import React from 'react'
import ShopHeader from  "../../components/Shops/ShopHeader"
import Deals from '../../components/Shops/Deals'
import ShopBanner from '../../components/Shops/ShopBanner'
import ShopDeal from "../../components/Shops/ShopDeal"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "./shops.css"

const Shops = () => {
  return (
    <div>
      <Navbar/>
      <ShopHeader />
      <Deals/>
      <ShopBanner />
      <ShopDeal />
      <Footer/>
    </div>
  )
}

export default Shops
