import React, { useState, useEffect } from 'react'
import Navigation from './navigation/Navigation'
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Commmerce instance
import commerce from './lib/commerce'

const App = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list(); 
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  console.log(products)
 
  return (
    <div>
      <Navigation products={products}/>
    </div>
  )
}

export default App
