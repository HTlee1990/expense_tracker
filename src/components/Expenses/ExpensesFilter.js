import './ExpensesFilter.css'
import React from 'react'

const ExpensesFilter = ({filterChangeHandler}) => {
    
    const DropDownChangeHandler = (e) => {
      filterChangeHandler(e.target.value)
    }

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onChange={DropDownChangeHandler}>
              <option value='2022' >2022</option>
              <option value='2021' >2021</option>
              <option value='2020' defaultValue>2020</option>
              <option value='2019' >2019</option>
            </select>
          </div>
        </div>
      );
}

export default ExpensesFilter
