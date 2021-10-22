import {Fragment} from "react";
import classes from './Header.module.css'
import ITImage from '../../assets/IT2.jpg'
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (<Fragment>
        <header className={classes.header}>
          <h1>IT Hardware</h1>
        <nav>
        <ul>
        <li><NavLink actionClassName={classes.active} to='/welcome'>Welcome</NavLink></li>
        <li><NavLink actionClassName={classes.active} to='/products'>Product</NavLink></li>
       <li><HeaderCartButton onClick={props.onShowCart}/></li></ul>
        </nav>
    </header>
    <div className={classes['main-image']}>
        <img src={ITImage} alt="IT Hardware " />
    </div>
    </Fragment>)
}

export default Header;