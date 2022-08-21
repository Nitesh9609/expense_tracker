import React, {useState}from 'react'

const ExpenseForm = (props) => {

  // const [input, setInput] = useState()
  const [expName, setExpName] = useState('')
  const [expAmount, setExpAmount] = useState('')
  const [expDate, setExpDate] = useState('')

  // const handleOnChange = (event) =>{
  //   const {name, value} = event.target
  //   setInput({...input, [name]:value})

  // }

  const expenseTitle = (event) =>{
      setExpName(event.target.value)
  }

  const expenseAmount = (event) =>{
    setExpAmount(event.target.value)
  }

  const expenseDate = (event) =>{
    setExpDate(event.target.value)
  }

  const handleOnSubmit = (event) =>{
    event.preventDefault()
    const value = {
      title : expName,
      amount : expAmount,
      date : expDate
    }
    props.saveExpense(value)

    
  }


  return (
    <>
        <form onSubmit={handleOnSubmit}>
            <div>
                <input type='text' name='name' placeholder='Add Expense' onChange={expenseTitle}/>
                <input type="number" name='amount' placeholder='Amount' onChange={expenseAmount}/>
            </div>

            <div>
                <input type="date" name="date" onChange={expenseDate}/>
            </div>

            <button onClick = {props.handleClick}>Cancel</button>
            
            <input type="submit" />
            
            

        </form>
    </>
  )
}

export default ExpenseForm