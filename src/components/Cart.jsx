import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  console.log('state: ', state);

  return (
    <div>
      <h1>Hello from cart</h1>
    </div>
  );
}
