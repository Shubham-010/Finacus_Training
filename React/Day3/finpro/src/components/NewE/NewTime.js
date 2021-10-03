import React from 'react';
import NewForm from './NewForm';
import './NewTime.css';



const NewTime=(props)=>{
    const gosaveTableDataHandler=(enteredsaveTableData)=>{
        const TableData={
            ...enteredsaveTableData,
            id: Math.random().toString()
        };
        props.onaddTableData(TableData);
    }
    return(
        <div className="new-timeT">
            <NewForm gosaveTableData={gosaveTableDataHandler} />
        </div>
    )
}
export default NewTime;