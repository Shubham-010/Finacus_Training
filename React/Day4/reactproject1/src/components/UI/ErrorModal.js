import React from "react";
import ReactDom from 'react-dom'
import Card from "./Card";
import Button from "./Button";
import classes from '../UI/Error.module.css';

const Backdrop =(props)=>{
    <div className={classes.backdrop} onClick={props.onConfirm}></div>;
}
const ModalOverlay =(props)=>{
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Done</Button>
      </footer>
    </Card>;
}

const ErrorModal=(props)=>{
return (
  <>
    {ReactDom.createPortal(
      <Backdrop onclick={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDom.createPortal(
        <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}

        />,document.getElementById('overlay-root')
    )}
  </>
);
};

export default ErrorModal;