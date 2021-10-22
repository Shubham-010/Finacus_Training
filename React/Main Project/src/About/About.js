import classes from './About.module.css';
import { Fragment } from 'react';
import bg from '../images/img2.jpg';
import bg3 from '../images/img3.jpg';
import {LoremIpsum} from 'react-lorem-ipsum';


const about=()=>{
   return(
       <Fragment>
           <div className={classes.about}>
            <div className={classes.aleft}>
                <div className={classes.acardbg}></div>
                <div className={classes.acard}>
                    <img src={bg} alt="" className={classes.img}/>
                </div>
             </div>
            <div className={classes.aright}>
                <h1 className={classes.atitle}>About Me!!</h1>
                <p className={classes.asub}>Some of my Favourite Projects comes from dynamic css</p>
                <p className={classes.adesc}>
                    <LoremIpsum p={1}/>
                </p>
                <div className={classes.aaward}>
                    <img src={bg3} alt="" className={classes.awardimg} />
                    <div className="aawardtexts">
            <h4 className={classes.aawardtitle}>International Design Awards 2021</h4>
            <p className={classes.aawarddesc}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
                </div>  
                </div>
           </div>
           </div>
       </Fragment>
   )
; 
};
export default about;