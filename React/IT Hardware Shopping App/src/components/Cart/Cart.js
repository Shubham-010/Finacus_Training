import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext , useState} from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const[isCheckout, setIsCheckout]=useState(false);
  const cartCTX = useContext(CartContext);
  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

  const hasItem = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItem({...item, amount:1});
  };
  const orderHandler=()=>{
    setIsCheckout(true);
  }

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions =(
    
  <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onHideCart}>
      Close
    </button>
    {hasItem && <button onClick={orderHandler} className={classes.button}>Order</button>}
    </div>
  );

    return (
    <Modal onHideCart={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onCancel={props.onHideCart}/>}
     {!isCheckout && modalActions}
    </Modal>
    );
};
export default Cart;
