import classes from './HardwareItem.module.css';
import HardwareItemForm from './HardwareItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const HardwareItem = (props) => {
  const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount)=>{
      cartCtx.addItem({
        id:props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    };
  return (
    <li className={classes.hardware}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <HardwareItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};
export default HardwareItem;
