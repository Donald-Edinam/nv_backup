import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductDetails from '../pages/ProductDetails'

const Navigation = ({ products }) => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage products={products}/>} />
            <Route path='/product/:id' element={<ProductDetails products={products}/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navigation
