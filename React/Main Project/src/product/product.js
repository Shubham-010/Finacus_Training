import "./product.css";
import ha1 from '../images/proimg.png';
import { Link } from 'react-router-dom'

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <Link to='./'>
        <img src={ha1} alt="" className="p-img" />
        </Link>
    </div>
  );
};

export default Product;