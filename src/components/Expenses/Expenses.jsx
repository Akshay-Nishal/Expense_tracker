import React from 'react'
import Expenseitem from './Expenseitem'
import './Expenseitem.css'
import {useSelector} from 'react-redux'




function Expenses(props) {
  const exp = useSelector(state=>state.expence.expences)
  return (

    <div className='expenses'>
      { (exp.length===0)?
        <div className='expenses-alert'>No Expense here. Please add more...</div>
        :
        (exp.length===1)?
        <div className='expenses-alert'>Only single Expense here. Please add more...</div>
        :
        <></>
      }
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


