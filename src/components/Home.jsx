import React from 'react';
import Products from './Products';

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/hero1.jpg" class="card-img" alt="Backgroung" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container  text-info">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text bg-danger text-dark  lead fs-2 col-5">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
