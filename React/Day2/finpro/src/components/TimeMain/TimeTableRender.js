import TimeTable from './TimeTable';


function TimeTableR(props){
    return(
<div>
<TimeTable Date1={props.Pass[0].date} 
               Task1={props.Pass[0].task} 
               Time1={props.Pass[0].time} 
               Process1={props.Pass[0].process}>
            </TimeTable>
      <TimeTable Date1={props.Pass[1].date} Task1={props.Pass[1].task} Time1={props.Pass[1].time} Process1={props.Pass[1].process}></TimeTable>
      <TimeTable Date1={props.Pass[2].date} Task1={props.Pass[2].task} Time1={props.Pass[2].time} Process1={props.Pass[2].process}></TimeTable>
      <TimeTable Date1={props.Pass[3].date} Task1={props.Pass[3].task} Time1={props.Pass[3].time} Process1={props.Pass[3].process}></TimeTable>

</div>)}
export default TimeTableR;