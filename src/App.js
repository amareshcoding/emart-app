import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={Cart} />
      </Routes>
    </>
  );
}

export default App;

//rfc -- to create functional components
