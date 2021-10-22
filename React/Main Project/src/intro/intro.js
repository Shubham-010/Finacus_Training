import classes from './intro.module.css';
import Me from '../images/pro.png';


const Intro=()=>{

    return (
      <div className={classes.intro}>
        <div className={classes.left}>
          <div className={classes.lwrapper}>
              <h2 className={classes.introi}>Hi,My Name is <h1 className={classes.name}>Shubham Chikane</h1></h2>
            
              <div className={classes.titleI}>
                  <div className={classes.titleIWrapper}>
                      <div className={classes.item}>React Developer	&#xf1c9;</div>
                      <div className={classes.item}>UI/UX Designer	&#xf1c9;</div>
                      <div className={classes.item}>Software Developer	&#xf1c9;</div>
                      <div className={classes.item}>Content Creator	&#xf1c9;</div>
                      <div className={classes.item}>Web Developer	&#xf1c9;</div>
                  </div>
              </div>
          
          <div className={classes.description}>
              A Recent IT Grad specialization in B.E(Information Technology).Love making website designs and Developing them!! 	&#xf109;
          </div>
          </div>
        </div>
        <div className={classes.right}>
        <div className={classes.ibg}></div>
            <img src={Me} alt="mypic" className={classes.img1}/>
        </div>
      </div>
    );
};
export default Intro;
