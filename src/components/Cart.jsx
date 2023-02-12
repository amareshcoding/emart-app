import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const cartTotal = cart.reduce((a, b) => a.price + b.price);
  return (
    <div className="container p-4 d-flex justify-content-between gap-4 ">
      <div className="flex-1 d-flex flex-column">
        {cart.map((item) => (
          <div
            className="mb-3 card p-3 d-flex flex-row align-items-center gap-5"
            style={{ height: '170px', width: '650px' }}
            key={item.id}
          >
            <img
              src={item.image}
              className="card-img"
              alt={item.title}
              style={{ height: '90%' }}
            />
            <div className="card-body d-flex flex-row gap-5 ">
              <h5 className="card-title ">{item.title.substring(0, 12)}</h5>
              <p className="card-text lead fw-bold">${item.price}</p>
              <div className="d-flex flex-row gap-2">
                <button className="btn border px-3" style={{ height: '40px' }}>
                  -
                </button>
                <p className="card-text lead fw-bold">{item.qty}</p>
                <button className="btn border px-3" style={{ height: '40px' }}>
                  +
                </button>
              </div>
              <img src="./assets/delete.png" alt="delete" height="30px" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="card d-flex flex-column p-4">
          {cart.map((item) => (
            <p key={item.title}>
              {item.title.substring(0, 12)}: ${item.price}
            </p>
          ))}
          <hr />
          <p>Cart Total: ${cartTotal}</p>
          <button className="btn bg-info text-light">Checkout</button>
        </div>
      </div>
    </div>
  );
}
