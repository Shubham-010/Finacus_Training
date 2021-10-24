import "./product.css";
import ha1 from '../images/proimg.png';
import ha2 from '../images/img3.jpg';
import { Link } from 'react-router-dom'

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"><span>This is To do List</span></div>
        <div className="p-circle1">Okay</div>
        <div className="p-circle2">Thanks</div>
      </div>
    
     <div className="buttonlink">
     
        <img src={ha1} alt="" className="p-img" />
        <button><a href="https://http-react1.web.app/">Live Demo</a></button>
        </div>
        <div className="buttonlink">
     
        <img src={ha2} alt="" className="p-img" />
        <button><a href="https://http-react1.web.app/">Live Demo</a></button>
        </div>
        
    </div>
  );
};

export default Product;