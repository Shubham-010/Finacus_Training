import classes from '../Layout/HeaderCartButton.module.css';
import { Link } from 'react-router-dom';

const Product=()=>{
    return(
    
    <section>
    <p className={classes.badge}>Product Page</p>
    <ul><Link to='/prducts/:productId'>productId</Link></ul>
    </section>)
}

export default Product;