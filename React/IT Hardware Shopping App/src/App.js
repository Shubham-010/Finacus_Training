import HardWare from "./components/Hardware/Hardware";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import {  useState } from 'react';
import CartProvider from "./store/CartProvider";

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
    </CartProvider>
  );
}

export default App;
