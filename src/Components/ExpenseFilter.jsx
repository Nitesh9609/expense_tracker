import React,{useState} from 'react'

const ExpenseFilter = ({onFilter}) => {

    
    const handleOnChange = (event) =>{
        onFilter(event.target.value);
    }

  return (
    <>
        <div>
            <label>
                Filter By Year
            </label>
            <select onChange={handleOnChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </>
  )
}

export default ExpenseFilter