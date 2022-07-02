import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>} />
        {/* <Route path="/" component={Home} />
        <Route path="/" component={Home} /> */}
      </Routes>
    </>
  );
}

export default App;

//rfc -- to create functional components
