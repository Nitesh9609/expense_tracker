import React from 'react'
import Chart from './Charts/Chart'
import dayjs from 'dayjs'

const ExpensesChart = (props) => {

    let chartDataPoints = [
        {label: 'Jan',value: 0},
        {label: 'Feb',value: 0},
        {label: 'Mar',value: 0},
        {label: 'Apr',value: 0},
        {label: 'May',value: 0},
        {label: 'Jun',value: 0},
        {label: 'Jul',value: 0},
        {label: 'Aug',value: 0},
        {label: 'Sep',value: 0},
        {label: 'Oct',value: 0},
        {label: 'Nov',value: 0},
        {label: 'Dec',value: 0},
    ]

    for(const expense of props.allExpense){
        const expMonth = parseInt(expense.date.slice(5,7) - 1)
        
        chartDataPoints[expMonth].value += expense.amount 
    }

  return (
    <Chart dataPoints = {chartDataPoints}/>
  )
}

export default ExpensesChart