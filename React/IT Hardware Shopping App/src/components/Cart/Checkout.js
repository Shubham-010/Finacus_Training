import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty=value=> value.trim() === '';
const isFiveChars=value=>value.trim().length ===5; 
const Checkout = (props) => {

const [formInputValidity, setformInputValidity]=useState({
    name: true,
    street: true,
    city: true,
    postalCode: true

});


const Nameref=useRef();
const Streetref=useRef();
const Postalref=useRef();
const Cityref=useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
  
    const enteredName = Nameref.current.value;
    const enteredStreet = Streetref.current.value;
    const enteredPostal = Postalref.current.value;
    const enteredCity = Cityref.current.value;


    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setformInputValidity({
        name:enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalIsValid,

    })

    const FormIsValid = 
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if(!FormIsValid){
      return;
    };}
  
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={Nameref} />
        {!formInputValidity.name && <p>Please entered a Valid Name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={Streetref} />
        {!formInputValidity.street && <p>Please entered a Valid street</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={Postalref}/>
        {!formInputValidity.postalCode && <p>Please entered a Valid Postal</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={Cityref}/>
        {!formInputValidity.city && <p>Please entered a Valid City</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;