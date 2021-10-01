import TimeTableR from './components/TimeMain/TimeTableRender';
import TCard from './components/UI/TCard';

function App(){
  const Event = [
    {
      date: new Date(2021, 9, 27),
      task:'Project 1',
      time:'2:30 pm',
      process:'Completed'
    },
    {
      date: new Date(2021, 9, 28),
      task:'Project 2',
      time:'3:30 pm',
      process:'Completed'
    },
    {
      date: new Date(2021, 9, 29),
      task:'Project 3',
      time:'4:00 pm',
      process:'Completed'
    },
    {
      date: new Date(2021, 9, 30),
      task:'Project 4',
      time:'4.30 pm',
      process:'Completed'
    },
  ];
  return (
    <TCard className="container">
      <div className="headd"><h2>To Do List !!</h2></div>
      <h3>Better three hours too soon than a minute too late!!</h3>
      <TimeTableR Pass={Event}></TimeTableR>
    </TCard>
    
  )}
export default App;
