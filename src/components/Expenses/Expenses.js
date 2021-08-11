import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";

function Expenses({ items }) {
  const [seletedYear, setSeletedYear] = useState(2020);
  // const [filtered, setFiltered] = useState(items)

  const filterChangeHandler = (year) => {
    setSeletedYear(year);
    // const filteredItems = items.filter(item => item.date.getFullYear().toString() === `${seletedYear}`)
    // setFiltered(filteredItems)
  };

  const filteredExpense = items.filter(
    (item) => item.date.getFullYear().toString() === `${seletedYear}`
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterChangeHandler={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList filteredExpense={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
