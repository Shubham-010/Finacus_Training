import {useParams} from 'react-router-dom';
import classes from '../Layout/HeaderCartButton.module.css'

function ProductDetails() {
    const params = useParams();
    console.log(params.productId);
    return (
        <section>
            <p className={classes.badge}>Product Details</p>
            <p>{params.productId}</p>
        </section>
    );
}
export default ProductDetails;