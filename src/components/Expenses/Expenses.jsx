import React, { useContext, useEffect, useState } from 'react'
import Expenseitem from './Expenseitem'
import './Expenseitem.css'
import { ExpenseContext } from '../../Contexts/expenseContext'
import ExpenseFilter from './ExpenseFilter'
// import { FilterContext } from '../../Contexts/filterContext'
// import Card from '../UI/Card'

function Expenses(props) {
  let {exs,setExpenses,filteredExpenses,setFilteredExpense} = useContext(ExpenseContext)
  // console.log(filteredExpenses.length)
  // let {filterYear,setFilterYear} = useContext(FilterContext)
  // useEffect(()=>{
  // },[exs])
  return (

    <div className='expenses'>
      <ExpenseFilter />
      { (filteredExpenses.length===0)?
        <div className='expenses-alert'>No Expense here. Please add more...</div>
        :
        (filteredExpenses.length===1)?
        <div className='expenses-alert'>Only single Expense here. Please add more...</div>
        :
        <></>
      }
      {
        filteredExpenses.map((d)=>{  
          return(
            <Expenseitem
            div key={d.id}
            id = {d.id}
            title= {d.title}
            amount = {d.amount}
            date = {d.date}
            LocationOfExpenditure = {d.LocationOfExpenditure}
            />
          )
        })
      }
    </div>
  )
}

export default Expenses


