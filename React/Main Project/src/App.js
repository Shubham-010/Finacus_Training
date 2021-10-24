import { useContext } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { ThemeContext } from "./Context";
import Intro from "./intro/intro";
import Navbar from "./NavMenu/navbar";
import ProductList from "./productList/productList";
import Toggle from "./toggle/toggle";
import UseWn from "./useWN/useWn";
import './App.css'
import { Route, Switch } from "react-router-dom";

function App() {
  const theme = useContext(ThemeContext);
  const colorMode = theme.state.colorMode;
  return (
    <div
      style={{
        backgroundColor: colorMode ? "white" : "",
        color: colorMode ? "Black" : "",
      }}
    ><Navbar/>
      <Switch>
        
        <Route path="/home" exact >
        <Intro/>
          <Toggle />
          </Route>
        
          <Route path='/products'>
          <UseWn />
          <ProductList />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
