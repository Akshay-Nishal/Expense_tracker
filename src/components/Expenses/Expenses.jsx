import React, { useContext, useEffect, useState } from 'react'
import Expenseitem from './Expenseitem'
import './Expenseitem.css'
import { ExpenseContext } from '../../Contexts/expenseContext'


function Expenses(props) {
  let expCtx = useContext(ExpenseContext)
  return (

    <div className='expenses'>
      { (expCtx.expences.length===0)?
        <div className='expenses-alert'>No Expense here. Please add more...</div>
        :
        (expCtx.expences.length===1)?
        <div className='expenses-alert'>Only single Expense here. Please add more...</div>
        :
        <></>
      }
      {
        expCtx.expences.map((item)=>{  
          return(
            <Expenseitem
            key={item.id}
            id = {item.id}
            description= {item.description}
            amount = {item.amount}
            category={item.category}
            />
          )
        })
      }
    </div>
  )
}

export default Expenses


