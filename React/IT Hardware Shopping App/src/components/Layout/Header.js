import {Fragment} from "react";
import classes from './Header.module.css'
import ITImage from '../../assets/IT2.jpg'
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return (<Fragment>
    <header className={classes.header}>
        <h1>IT Hardware</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={ITImage} alt="IT Hardware " />
    </div>
    </Fragment>)
}

export default Header;