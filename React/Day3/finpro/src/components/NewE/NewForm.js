import React, { useState } from 'react';
import './NewForm.css';
import styled from 'styled-components';

const Button = styled.button`
    font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  
&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;


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
             <div className={`new-time__control ${!isValid ? 'invalid':''}`}>
                    <label>Date</label>
                    <input type='date' value={entereddate} min="2019-01-01" max="2022-12-31" onChange={datechangeHandler}></input>
             </div>
             <div className={`new-time__control ${!isValid ? 'invalid':''}`}>
                    <label>Task</label>
                    <input type='text' value={enteredtask} onChange={taskchangeHandler}></input>
             </div>
             <div className={`new-time__control ${!isValid ? 'invalid':''}`}>
                    <label>Time</label>
                    <input type='time' value={enteredtime} onChange={timechangeHandler}></input>
             </div>
             <div className={`new-time__control ${!isValid ? 'invalid':''}`}>
                    <label>Process</label>
                    <select value={enteredprocess} onChange={processchangeHandler}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        </select>
            </div>
            <div className="new-time__actions">
                    <Button type="button" onClick={props.onCancel}>Cancel</Button>
                    <Button type="submit">Add Event</Button>
             </div>
             </div>
         </form>
 )
};
export default NewForm;