import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = ({addExpenseHandler}) => {
    const [clicked, setClicked] = useState(false);
    const clickedHandler = () => {
        setClicked((prevState) =>!prevState)
      }
      const stopEditing = () => {
        setClicked(false)
      }
    return (
        <div className="new-expense">
            {!clicked && <button onClick={clickedHandler}>Add New Expnse</button>}
            {clicked && <ExpenseForm addExpenseHandler={addExpenseHandler} stopEditing={stopEditing}/>}
        </div>
    )
}


export default NewExpense;