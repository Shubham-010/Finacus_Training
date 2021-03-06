import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helper/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const[enteredUsername, setEnteredUsername]=useState('');
  const[enteredAge, setEnteredAge]=useState('');
  const[error , setError]=useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age !!',
      })
      return;
    }
    if (+enteredAge < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid name and age !!',
      })
      return;
    }
   props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const userNamechangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }
  const userAgechangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
  const errorHandler =() =>{
    setError(null)
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={userNamechangeHandler} ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" onChange={userAgechangeHandler} ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
