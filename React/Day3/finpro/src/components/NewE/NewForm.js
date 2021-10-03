import React, { useState } from 'react';
import './NewForm.css';

const NewForm=(props)=>{
    const [enteredtask, setEnteredTask]=useState('');
    const [enteredtime, setEnteredTime]=useState('');
    const [entereddate, setEnteredDate]=useState('');
    const [enteredprocess, setEnteredProcess]=useState('');
    const taskchangeHandler=(event)=>{
        setEnteredTask(event.target.value);
    };
    const datechangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    const timechangeHandler=(event)=>{
        setEnteredTime(event.target.value);
    };
    const processchangeHandler=(event)=>{
        setEnteredProcess(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const TableData={
            date:new Date(entereddate),
            task: enteredtask,
            time: enteredtime,
            process: enteredprocess,
        };
        props.gosaveTableData(TableData);
        setEnteredDate('');
        setEnteredProcess('');
        setEnteredTask('');
        setEnteredTime('');
    };
 return(
     
         <form onSubmit={submitHandler}>
             <div className="new-time__controls">
             <div className="new-time__control">
                    <label>Date</label>
                    <input type='date' value={entereddate} min="2019-01-01" max="2022-12-31" onChange={datechangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label>Task</label>
                    <input type='text' value={enteredtask} onChange={taskchangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label>Time</label>
                    <input type='time' value={enteredtime} onChange={timechangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label>Process</label>
                    <select value={enteredprocess} onChange={processchangeHandler}>
                        <option value="Pending">Pending</option>
                        <option value="completed">Completed</option>

                    </select>
            </div>
            <div className="new-time__actions">
                    <button type="submit">Add Event</button>
             </div>
             </div>
         </form>
 )
};
export default NewForm;