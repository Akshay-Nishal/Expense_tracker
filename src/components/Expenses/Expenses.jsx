import React, { useContext } from 'react'
import Expenseitem from './Expenseitem'
// import Card from '../UI/Card'
import './Expenseitem.css'
import { ExpenseContext } from '../../Contexts/expenseContext'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {
    // console.log(props.data)
  let {exs,setExpenses} = useContext(ExpenseContext)
  console.log("Expenses : ",exs)
  const filterApply = (filterYear) =>{
    console.log(filterYear)
  }
  return (

    <div className='expenses'>
      <ExpenseFilter onChangeFilter = {filterApply}/>
      {
        exs.map((d)=>{
          return(
            <div key={d.id}>
            <Expenseitem
            id = {d.id}
            title= {d.title}
            amount = {d.amount}
            date = {d.date}
            LocationOfExpenditure = {d.LocationOfExpenditure}
            />
            </div>
          )
        })
      }
    </div>
  )
}

export default Expenses
