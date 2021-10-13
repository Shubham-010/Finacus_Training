import React, { useState , useEffect , useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return { value: action.val,isValid: action.val.includes('@')};

  }
  if (action.type === 'INPUT_BLUR'){
    return { value: state.value,isValid: state.value.includes('@')};
  }
  return {value: '',isValid:false};
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return { value: action.val,isValid: action.val.trim().length > 6};

  }
  if (action.type === 'INPUT_BLUR'){
    return { value: state.value,isValid: state.value.trim().length > 6};
  }
  return {value: '',isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPwd] = useReducer(passwordReducer,{
    value: '',
    isValid:null,

  });

  const { isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    }
  }, []);

  useEffect(()=>{
    const identfier = setTimeout(() => {
    console.log('Checking form Validity!');
    
  setFormIsValid(
    emailState.isValid && passwordState.isValid
  );
}, 500);
return () => {
  console.log('CLEANUP!');
  clearTimeout(identfier);
};
}, [ emailState, passwordState]);
  
  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val:event.target.value});
    // setEnteredEmail(event.target.value);

  //   setFormIsValid(
  //     event.target.value.includes('@') > 6 && emailState.isValid);
    
  };

   
  

  const passwordChangeHandler = (event) => {
    dispatchPwd({type: 'USER_INPUT', val:event.target.value});

  //   setFormIsValid(
  //     emailState.value.trim().length > 6 && passwordState.isValid);
    
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPwd({type: 'INPUT_BLUR'});
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value,passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
