import React from 'react'
import NavBar from '../components/homepage/NavBar'
import HeroSection from '../components/homepage/HeroSection'
import MainProducts from '../components/homepage/MainProducts'
import ProductSwiper from '../components/homepage/ProductSwiper'

const HomePage = ({ products }) => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MainProducts products={products}/>
      <ProductSwiper products={products}/>
    </div>
  )
}

export default HomePage
