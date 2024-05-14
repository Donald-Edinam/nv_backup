import React from 'react';
import NavBar from '../components/homepage/NavBar';
import { Link } from 'react-router-dom';

const CartContainer = ({ cart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart }) => {


  const EmptyCart = () => {
    return <h2 className='text-center my-5 mx-auto'>Your Cart is Empty <Link to={"/"}>Explore the Shop</Link> </h2>;
  };

  let totalItems = [];
  try {
    totalItems = cart.line_items || [];
  } catch (error) {
    console.error('Error retrieving line items from cart:', error);
    return <EmptyCart />
  }

  console.log("Cart total items", totalItems);
  const isCartEmpty = !cart.total_items;


  const FilledCart = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          {totalItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-md-flex d-sm-block d-md-block justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="mr-3"
                    style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', height: 'auto' }}
                  />
                  <div>
                    <h5 className="card-title mb-0">{item.name}</h5>
                    <div className="card-text mb-0 d-flex">
                      <div className="d-flex w-25 justify-content-between mx-2 my-1">
                        <p className='m-2'>{`Quantity: `}</p>
                        <p className='p-2' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</p>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                          className="form-control d-inline-block"
                          style={{ width: '50px', height: '40px' }}
                        />
                        <p className='p-2' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex w-25 justify-content-between g-2'>
                  <button className=" btn btn-danger mx-2">Remove</button>
                  <strong className='my-2'>{item.price.formatted_with_symbol}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="d-flex row">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">Cart Summary</h5>
                    <p className="card-text mb-3">
                      Total:{' '}
                      <strong>{cart.subtotal.formatted_with_symbol}</strong>
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-block">
                        Checkout
                      </button>
                      <button className="btn btn-danger btn-block" onClick={() => handleEmptyCart()}>
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid h-100">
        <h1 className="text-center">
          Your Shopping Cart
        </h1>
        {isCartEmpty ? <EmptyCart /> : <FilledCart />}
      </div>
    </>
  );
};

export default CartContainer;
