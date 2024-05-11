import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ products, cart }) => {

    const arrayDummy = [1,2,3,4]

    const { id } = useParams();
    const product = products.find(product => product.id ===id)

    if(!product) return <h1>Product not found</h1>

  return (
    <>
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={product.image.url} alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: {product.sku}</div>
                        <h1 class="display-5 fw-bolder">{product.name}</h1>
                        <div class="fs-5 mb-5">
                            {/* <span class="text-decoration-line-through">$45.00</span> */}
                            <span>{product.price.formatted_with_symbol}</span>
                        </div>
                        <p class="lead">{product.seo.description}</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductDetails
