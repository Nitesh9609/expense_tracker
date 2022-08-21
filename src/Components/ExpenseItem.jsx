import React from 'react'
import ExpenseForm from './ExpenseForm'

const ExpenseItem = () => {

  const allExpenseSave = (allExpense) =>{
    const expences = {
      allExpense
    }

    console.log(expences);

  }

  return (
    <>
      <h5>Expense Tracking app</h5>
      <ExpenseForm saveExpense = {allExpenseSave}/>
    </>
  )
}

export default ExpenseItem