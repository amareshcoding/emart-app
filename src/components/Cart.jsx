import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeQty, delCart } from '../redux/action/action';

export default function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const changeQtyHandle = (type, producrId) => {
    dispatch(changeQty(type, producrId));
  };

  const deleteHandle = (producrId) => {
    dispatch(delCart(producrId));
  };

  const Loading = () => {
    return (
      <div className="p-4">
        <div className="col-md-6">
          <Skeleton height={170} />
        </div>
        <div className="col-md-6">
          <Skeleton height={170} />
        </div>
      </div>
    );
  };
  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container p-4 d-flex justify-content-between gap-4 ">
      <div className="flex-1 d-flex flex-column">
        {products.map((item) => (
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
                <button
                  className="btn border px-3"
                  style={{ height: '40px' }}
                  onClick={() => changeQtyHandle('dec', item.id)}
                >
                  -
                </button>
                <p className="card-text lead fw-bold">{item.qty}</p>
                <button
                  className="btn border px-3"
                  style={{ height: '40px' }}
                  onClick={() => changeQtyHandle('inc', item.id)}
                >
                  +
                </button>
              </div>
              <img
                src="./assets/delete.png"
                alt="delete"
                height="40px"
                className="btn"
                onClick={() => deleteHandle(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="card d-flex flex-column p-4">
          {products.map((item) => (
            <p key={item.title}>
              {item.title.substring(0, 12)}: ${item.price}
            </p>
          ))}
          <hr />
          <p>
            Cart Total: $
            {products.reduce((total, item) => total + item.price * item.qty, 0)}
          </p>
          <button className="btn bg-info text-light">Checkout</button>
        </div>
      </div>
    </div>
  );
}
