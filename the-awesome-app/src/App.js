// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
// import Product from './components/Product/Product';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList';
import Product from './components/Product/Product';


function App() {
  
  return (
    <div className="App">

      <Navbar/>
      <Switch>
      <Route path='/login'>
    <Login/>
    </Route>
    <Route path='/products'>
    <ProductList/>
    <Product/>
    </Route>
    <Route path='/editProduct'>
    <Cart/>
    </Route>
    </Switch>
    
    </div>
  );
}

export default App;
