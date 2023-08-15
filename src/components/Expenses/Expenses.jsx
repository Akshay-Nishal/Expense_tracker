import React from 'react'
import Expenseitem from './Expenseitem'
// import Card from '../UI/Card'
import './Expenseitem.css'

function Expenses(props) {
    // console.log(props.data)
  return (

    <div className='expenses'>
      {
        props.data.map((d)=>{
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
