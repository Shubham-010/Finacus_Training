import HardWare from "./components/Hardware/Hardware";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import {  useState } from 'react';
import CartProvider from "./store/CartProvider";
import {Route ,Switch} from 'react-router-dom';
import Welcome from "./components/Pages/Welcome";
import Product from "./components/Pages/Product";
import ProductDetails from "./components/Pages/ProductDetails";


function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler =()=>{
      setCartIsShown(true);
    };
    const hideCartHandler =()=>{
      setCartIsShown(false);
    }

  return (
    <CartProvider>
     
    {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <HardWare/>
      </main>
      <Switch>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
      <Route path='/products' exact>
        <Product/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetails/>
      </Route>
      </Switch>
    </CartProvider>
  
  );
}

export default App;
