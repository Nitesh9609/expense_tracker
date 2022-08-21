import React from 'react'
import dayjs from 'dayjs'
const DisplayExpense = ({name,amount,date}) => {
  

  return (
    <>
      <div className='exp_display'>
          <h5>{name}</h5>
          <h5>&#x20b9; {amount}</h5>
          <h5>{date}</h5>
          
      </div>
        
    </>
  )
}

export default DisplayExpense