import './Timet.css';
import TimeDate from './TimeDate.js'
import React,{ useState } from 'react';

function TimeTable(props){
  const [task,setTask]=useState(props.Task1);
  const [time,setTime]=useState(props.Time1);
  const clickhandler = () =>{
    setTask('Workout');
    setTime('5:00 am');
    console.log(task,time);
}

    return(<div>
    <div className="Table-date">
          <TimeDate Date1={props.Date1}/>
        
     
        <div className="Table-Task"><h2>{task}</h2></div>
        <div className="Table-Time">{time}</div>
        <div className="Table-process">&#10003;{props.Process1}</div>
        <button onClick={clickhandler}> Updates</button></div></div>
    // <div><div className="container">   

  // <div className="column-layout">
  //   <div className="main-column">
  //     <h3>Main Column</h3>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet laudantium minima consectetur tenetur. Repudiandae, autem, voluptate modi deleniti sequi voluptatum!</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum fugit veniam amet quae sint vitae numquam dolore sunt quod a odio officia voluptate doloribus, at. Cum quasi mollitia eaque. Voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet laudantium.</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet laudantium minima consectetur tenetur. Repudiandae, autem, voluptate modi deleniti sequi voluptatum!</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum fugit veniam amet quae sint vitae numquam dolore sunt quod a odio officia voluptate doloribus, at. Cum quasi mollitia eaque.</p>
  //   </div>
  
  //   <div className="sidebar-one">
  //     <h3>List Of Crops</h3>
  //     <ul>
  //       <li>Rice</li>
  //       <li>Bajra</li>
  //       <li>soyabeans</li>
  //       <li>Jowar</li>      
  //     </ul>
  //   </div>
  
  //   <div className="sidebar-two">
  //     <h3>Sidebar Two</h3>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum modi nisi tenetur sint dignissimos nulla, blanditiis nesciunt.</p>
  //   </div>
  // </div>

  // <div className="call-outs-container">
  //   <div className="call-out">
  //     <h2>Crops Available</h2>
  //     <div className="fixed-size">{props.crops}</div>
  //     <div className="fixed-size">{props.amount}</div>
  //     <div className="fixed-size">{crop3}</div>
  //     <div className="fixed-size">{crop4}</div>
  //     <div className="fixed-size">{crop5}</div>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati vel, placeat numquam omnis sit consectetur nobis molestias! Explicabo deserunt. Consectetur adipisicing elit. Quibusdam obcaecati vel, placeat numquam placeat numquam omnis sit consectetur.</p>
  //   </div>
  
  //   <div className="call-out">
  //     <h2>Crops Price</h2>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati vel, placeat numquam omnis sit consectetur nobis molestias! Explicabo deserunt placeat numquam omnis.</p>
  //   </div>
  
  //   <div className="call-out">
  //     <h2>Crops Stocks</h2>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam obcaecati vel, placeat numquam omnis sit.</p>
  //   </div>
  // </div>

  // <div className="fixed-size-container">
    
    
  // </div>

  // <div className="banner">
  //   <div className="center-me"><span>Center karo bhai</span></div>
  // </div>

  // <div className="equal-height-container">
  //   <div className="first">
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi similique amet voluptatem molestiae nostrum ab nesciunt blanditiis repellendus quos, sequi sunt, dolorem quis facilis mollitia nemo modi doloribus quo.</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quisquam, veritatis ducimus, vero magnam hic quia pariatur asperiores laudantium quod nobis perspiciatis, expedita quo reprehenderit quasi iusto ullam error reiciendis.</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi similique amet voluptatem molestiae nostrum ab nesciunt blanditiis repellendus quos, sequi sunt, dolorem quis facilis mollitia nemo modi doloribus quo.</p>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quisquam, veritatis ducimus, vero magnam hic quia pariatur asperiores laudantium quod nobis perspiciatis, expedita quo reprehenderit quasi iusto ullam error reiciendis.</p>
  //   </div>
  
  //   <div className="second">
  //     <div className="second-a">A</div>
  //     <div className="second-b">B</div>
  //   </div>
  // </div>
  //       </div></div>
    )
}
export default TimeTable;