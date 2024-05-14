import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductDetails from '../pages/ProductDetails'
import CartContainer from '../pages/CartContainer'

const Navigation = ({ products, onAddToCart, cart, handleAddToCart, handleEmptyCart,  handleRemoveFromCart, handleUpdateCartQty}) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage products={products} onAddToCart={onAddToCart} />} />
          <Route path='/product/:id' element={<ProductDetails products={products} onAddToCart={onAddToCart} />} />
          <Route path='/cart' element={<CartContainer cart={cart} handleEmptyCart={handleEmptyCart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
