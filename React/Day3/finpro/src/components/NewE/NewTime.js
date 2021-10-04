import React, { useState } from 'react';
import NewForm from './NewForm';
import './NewTime.css';



const NewTime=(props)=>{
const [isEditing, setIsEditing] = useState(false);

const gosaveTableDataHandler = (enteredsaveTableData) => {
  const TableData = {
    ...enteredsaveTableData,
    id: Math.random().toString(),
  };
  props.onaddTableData(TableData);
};
const startEditingHandler = () => {
  setIsEditing(true);
};
const stopEditingHandler = () => {
    setIsEditing(false);
  };
return (
  <div className="new-timeT">
    {!isEditing && <button onClick={startEditingHandler}>Add To List</button>}
    {isEditing && <NewForm 
    gosaveTableData={gosaveTableDataHandler}
    onCancel={stopEditingHandler} />}
  </div>
);
}
export default NewTime;