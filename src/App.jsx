import React, { useState, useEffect } from 'react'
import Navigation from './navigation/Navigation'
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Commmerce instance
import commerce from './lib/commerce'

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list(); 
    setProducts(data)
  }

  // Fetch cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    setLoading(false);
  }

      // Add to cart functionality
      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  console.log(" Cart Info", cart)

    const MainContent = () => {
      return (
       <div>
      <Navigation products={products} onAddToCart={handleAddToCart}/>
    </div>
     )
   };


    return (
  loading ? <h1>NovaBuzzer</h1> : <MainContent />
);
}

export default App
