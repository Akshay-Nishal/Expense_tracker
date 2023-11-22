import React from 'react'
import Expenseitem from './Expenseitem'
import './Expenseitem.css'
import {useSelector} from 'react-redux'
import {CSVLink} from 'react-csv'




function Expenses(props) {
  const exp = useSelector(state=>state.expence.expences)
  const prem = useSelector(state=>state.prem.premiumActivate)

  return (

    <div className={prem===true? 'expenses dark': 'expenses'}>
      {/* { (exp.length===0)?
        <div className='expenses-alert'>No Expense here. Please add more...</div>
        :
        (exp.length===1)?
        <div className='expenses-alert'>Only single Expense here. Please add more...</div>
        :
        <></>
      } */}
      {
        exp.map((item)=>{  
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


