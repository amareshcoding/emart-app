import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;

//rfc -- to create functional components
