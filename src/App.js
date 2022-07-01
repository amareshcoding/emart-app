import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Products} />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} /> */}
      </Switch>
    </>
  );
}

export default App;

//rfc -- to create functional components
