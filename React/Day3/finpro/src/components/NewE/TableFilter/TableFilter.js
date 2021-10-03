import React from 'react';

import './TableFilter.css';

const TableFilter = (props) => {
    const gochangeTableFilter=(event)=>{
        props.onchangeFilter(event.target.value);
    }
  return (
    <div className='table-filter'>
      <div className='table-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={gochangeTableFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default TableFilter;