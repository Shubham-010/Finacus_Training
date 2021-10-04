
import TableFilter from '../NewE/TableFilter/TableFilter';
import React,{useState} from 'react';
import TimeList from './TimeList';
import TimeChart from './TimeChart';


const TimeTableR=(props)=>{
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterchangeHandler = selectedYear=>{
        setFilteredYear(selectedYear);
    }

    const filteredData = props.Pass.filter(Event =>{
        return Event.date.getFullYear().toString() === filteredYear;
    });

    
return(
<div className='Table'>
<TableFilter selected={filteredYear} onchangeFilter={filterchangeHandler}/>
<TimeChart event={filteredData}/>
<TimeList event={filteredData}/>
</div>)}
export default TimeTableR;