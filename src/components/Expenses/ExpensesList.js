import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({filteredExpense}) => {
    if(filteredExpense.length === 0) return <h2 className="expenses-list__fallback">Found No Expenses.</h2>

    return (
        <ul className="expenses-list">
            {filteredExpense.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ))}
            
        </ul>

    )
}

export default ExpensesList
