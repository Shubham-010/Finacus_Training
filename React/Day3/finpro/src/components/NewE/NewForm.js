import React, { useState } from 'react';
import './NewForm.css';

const NewForm=(props)=>{
    const [enteredtask, setEnteredTask]=useState('');
    const [enteredtime, setEnteredTime]=useState('');
    const [entereddate, setEnteredDate]=useState('');
    const [enteredprocess, setEnteredProcess]=useState('');
    const [isValid, setisValid] = useState(true);
    const taskchangeHandler=(event)=>{
        if(event.target.value.trim().length > 0){
            setisValid(true);
        }
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
        if (enteredtask.trim().length === 0 ){
            setisValid(false);
            return;
        }
        if (entereddate.trim().length === 0 ){
            setisValid(false);
            return;
        }
        if (enteredtime.trim().length === 0 ){
            setisValid(false);
            return;
        }
        if (enteredprocess.trim().length === 0 ){
            setisValid(false);
            return;
        }
        const TableData={
            date:new Date(entereddate),
            task: enteredtask,
            time: +enteredtime,
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
                    <label style={{color: !isValid ? 'red':'white'}}>Date</label>
                    <input style={{borderColor: !isValid ? 'red':'white', background: !isValid ? 'LightCoral':'white'}} type='date' value={entereddate} min="2019-01-01" max="2022-12-31" onChange={datechangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label style={{color: !isValid ? 'red':'white'}}>Task</label>
                    <input style={{borderColor: !isValid ? 'red':'white',background: !isValid ? 'LightCoral':'white'}} type='text' value={enteredtask} onChange={taskchangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label style={{color: !isValid ? 'red':'white'}}>Time</label>
                    <input style={{borderColor: !isValid ? 'red':'white',background: !isValid ? 'LightCoral':'white'}} type='time' value={enteredtime} onChange={timechangeHandler}></input>
             </div>
             <div className="new-time__control">
                    <label style={{color: !isValid ? 'red':'white'}}>Process</label>
                    <select style={{borderColor: !isValid ? 'red':'white',background: !isValid ? 'LightCoral':'white'}} value={enteredprocess} onChange={processchangeHandler}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        </select>
            </div>
            <div className="new-time__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Event</button>
             </div>
             </div>
         </form>
 )
};
export default NewForm;