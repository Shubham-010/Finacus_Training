import TimeTable from './TimeTable';
import TableFilter from '../NewE/TableFilter/TableFilter';
import React,{useState} from 'react';

const TimeTableR=(props)=>{
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterchangeHandler = selectedYear=>{
        setFilteredYear(selectedYear);
    }
return(
<div>
<TableFilter selected={filteredYear} onchangeFilter={filterchangeHandler}/>
{props.Pass.map((Event) => (<TimeTable 
Date1={Event.date}
Task1={Event.task}
Time1={Event.time}
Process1={Event.process}
/>))}
</div>)}
export default TimeTableR;