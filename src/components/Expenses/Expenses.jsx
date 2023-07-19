import React from 'react'
import Expenseitem from './Expenseitem'
import Card from '../UI/Card'
import './Expenseitem.css'

function Expenses(props) {
    // console.log(props.data)
  return (

    <div className='expenses'>
        <Expenseitem
        id = {props.data[0].id}
        title= {props.data[0].title}
        amount = {props.data[0].amount}
        date = {props.data[0].date}
        LocationOfExpenditure = {props.data[0].LocationOfExpenditure}
        />
        <Expenseitem
        id = {props.data[1].id}
        title= {props.data[1].title}
        amount = {props.data[1].amount}
        date = {props.data[1].date}
        LocationOfExpenditure = {props.data[1].LocationOfExpenditure}
        
        />
        <Expenseitem
        id = {props.data[2].id}
        title= {props.data[2].title}
        amount = {props.data[2].amount}
        date = {props.data[2].date}
        LocationOfExpenditure = {props.data[2].LocationOfExpenditure}
        />
        <Expenseitem
        id = {props.data[3].id}
        title= {props.data[3].title}
        amount = {props.data[3].amount}
        date = {props.data[3].date}
        LocationOfExpenditure = {props.data[3].LocationOfExpenditure}
        />
    </div>
  )
}

export default Expenses
