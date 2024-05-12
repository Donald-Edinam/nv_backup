import React from 'react'
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';
import { Link } from 'react-router-dom';

const MainProducts = ({ products, onAddToCart }) => {

     const sliceProducts = products.slice(0, 4)

    return (
        <>
            <div className="container px-4 py-5" id='lists'>
                <h2 className='pb-2 border-bottom'>Featured Products</h2>
                <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4  py-5">
                    {sliceProducts.map((product) => (
                        <div className="col" key={product.id}>
                                <div className="card h-100">
                                <Link to={`/product/${product.id}`} className="card text-decoration-none card-cover h-100 overflow-hidden text-white bg-dark rounded-1 shadow-lg">
                                    <img src={product.image.url} className='img-fluid' style={{ objectFit: 'cover', height: '900%' }} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.seo.description.slice(0, 50)}...</p>
                                        {/* {product.description} */}
                                    </div>
                                </Link>
                                    <div className="card-footer d-flex justify-content-between align-items-center my-2 container w-100" >
                                        <button className="btn btn-secondary" onClick={() => onAddToCart(product.id, 1)}>Add to Cart</button>
                                        <p className='my-2 font-bold'>{product.price.formatted_with_symbol}</p>
                                    </div>
                                </div>
                        </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default MainProducts
