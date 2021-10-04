import TimeTableR from './components/TimeMain/TimeTableRender';
import TCard from './components/UI/TCard';
import NewTime from './components/NewE/NewTime';
import React, {useState} from 'react';
const Dummy_data = [
  {
    id: 'n1',
    date: new Date(2021, 9, 27),
    task:'Project 1',
    time:'2:30 pm',
    process:'Completed'
  },
  {
    id:'n2',
    date: new Date(2021, 9, 28),
    task:'Project 2',
    time:'3:30 pm',
    process:'Completed'
  },
  {
    id:'n3',
    date: new Date(2021, 9, 29),
    task:'Project 3',
    time:'4:00 pm',
    process:'Completed'
  },
  {
    id:'n4',
    date: new Date(2021, 9, 30),
    task:'Project 4',
    time:'4.30 pm',
    process:'Completed'
  },
];
const App=()=>{
  const[Event, setEvents]=useState(Dummy_data);
  
  const addtableHandler= event =>{
   setEvents(prevEvent => {
     return [event, ...prevEvent];
   });
  };
  return (
    <li>
    <div>
    <div className="bgi">
    <TCard className="container">
    
      <div className="headd"><h2>To Do List !!</h2></div>
      <h3>Better three hours too soon than a minute too late!!</h3>
      
      <NewTime onaddTableData={addtableHandler}/>
      <TimeTableR Pass={Event}></TimeTableR>
    </TCard></div></div>
    </li>
  )}
export default App;
