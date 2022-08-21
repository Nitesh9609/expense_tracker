import { useState, useEffect } from "react";
import "./App.css";
import DisplayExpense from "./Components/DisplayExpense";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";
import ExpensesChart from "./Components/ExpensesChart";
import dayjs from "dayjs";

function App() {
  const [exp, setExp] = useState([]);
  const [expFilter, setExpFilter] = useState("2022");
  const [showExp, setShowExp] = useState()
  const dayjs = require('dayjs')

  const allExpenseSave = (allExpense) => {
    const expences = {
      allExpense,
    };

    // console.log(expences);

    setExp((prevExpense) => {
      return [allExpense, ...prevExpense];
    });

    setShowExp(false)
  };

  const allExpFilter = (setFilter) => {
    setExpFilter(setFilter);
  };

  const expenceFilters = exp.filter((exps) => {
    return exps.date.slice(0, 4) === expFilter;
  });

  const showExpFields = () =>{
    setShowExp(true)
  }

  const showCancelBtn = () =>{
    setShowExp(false)
  }

  const date = new Date()

  return (
    <>
      <div className="App">
        <div>
          {showExp ?  <ExpenseForm saveExpense={allExpenseSave} handleClick ={showCancelBtn} /> : <button onClick={showExpFields}>Add More Expense</button>  }
          
          {/* {showExp && <button onClick={showCancelBtn}>Cancel</button> } */}
          
        </div>

        <ExpensesChart allExpense = {expenceFilters}/>
        
        <ExpenseFilter onFilter={allExpFilter} />
        {expenceFilters.length === 0 ? (
          <p>No Expense found</p>
        ) : (
          expenceFilters.map((data) => {
            return (
              <DisplayExpense
                name={data.title}
                amount={data.amount}
                date= {dayjs(data.date).format('DD-MMM-YYYY')}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
