
import { useContext } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { ThemeContext } from "./Context";
import Intro from "./intro/intro";
import ProductList from "./productList/productList";
import Toggle from "./toggle/toggle";
// import {Route} from 'react-router-dom';


function App() {

  const theme = useContext(ThemeContext)
  const colorMode = theme.state.colorMode;
  return (
    <div style={{backgroundColor: colorMode? 'white':'', color: colorMode?  'Black':'' }}>
    <Toggle/>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
      {/* <Route path='./about'>
        <About />
      </Route> */}
    </div>

  );
}

export default App;
