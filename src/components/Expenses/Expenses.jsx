import React, { useContext } from 'react'
import Expenseitem from './Expenseitem'
// import Card from '../UI/Card'
import './Expenseitem.css'
import { ExpenseContext } from '../../Contexts/expenseContext'
import ExpenseFilter from './ExpenseFilter'
import { FilterContext } from '../../Contexts/filterContext'

function Expenses(props) {
    // console.log(props.data)
  let {exs,setExpenses} = useContext(ExpenseContext)
  let {filterYear,setFilterYear} = useContext(FilterContext)
  // console.log("Filter : ",filterYear)
  // console.log("Expenses : ",exs)
  const filterApply = (filterYear) =>{
    console.log(filterYear)
  }
  return (

    <div className='expenses'>
      <ExpenseFilter onChangeFilter = {filterApply}/>
      {(filterYear=='All')?
          exs.map((d)=>{  
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
        :
        // <div>Some</div>
        exs.map((d)=>{
          let fd
          if(typeof d.date==='object'){
            fd = d.date.getFullYear().toString()
          }
          else{
            let tem = d.date.split('-')
            fd = tem[0]
          }
          if(filterYear===fd){
            // console.log(typeof fd, fd)
            // console.log(d)
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
          }
        })
      }
    </div>
  )
}

export default Expenses


