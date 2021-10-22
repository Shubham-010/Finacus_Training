import "./productList.css";
import Product from "../product/product";
import {LoremIpsum} from 'react-lorem-ipsum';
// import { data } from "../data";
import Bigh4 from '../images/proimg.png';
// import { useState } from "react";
// import { Link } from "react-router-dom";





const ProductList = () => {
  // const[clickf,setClickf]=useState(false);

  
// const clickhandler=()=>{
  // setClickf(true);
  // }
  
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"><span>Eat.</span>Sleep.<span>Code.</span>Repeat!!<span>...</span></h1>
        <p className="pl-desc">
          <LoremIpsum p={1}/>
        </p>
      </div>
      <div className="pl-list">
      <Product>
          <img src={Bigh4} alt="" className="pimg"/>
         
      </Product>
      {/* <button onClick={clickhandler}>Button</button>
      {clickf && <Link to='./about'/>} */}

        {/* {data.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

      </div>
    </div>
  );
};

export default ProductList;