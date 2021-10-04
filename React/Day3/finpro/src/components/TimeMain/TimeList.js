import React from "react";
import TimeTable from './TimeTable';

const TimeList = props=>{

    if(props.event.length === 0 ){
        return <h2 className='Event-list__fallback'>Found no expenses.</h2>
    }
    return (
        <ul className="Event-List">
            {
            props.event.map((Event) => 
            (<TimeTable 
            key={Event.id}
            Date1={Event.date}
            Task1={Event.task}
            Time1={Event.time}
            Process1={Event.process}
            />))
            }
        </ul>
    )
};
export default TimeList;