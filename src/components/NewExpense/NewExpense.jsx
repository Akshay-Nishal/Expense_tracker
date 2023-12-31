import React, { useContext } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { ExpenseContext } from '../../Contexts/expenseContext';


function NewExpense(props) {
  
  function getRandomInt(min,max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }


  let {exs,setExpenses} = useContext(ExpenseContext)
  const addNewExpense = (newExpense) =>{
    console.log('Adding')
    setExpenses(prevx =>[...prevx,newExpense])
    console.log(exs)
    
  }

  const saveExpenseDataHandeler = (enteredExpenseData) =>{
    let code = ''
    let s = enteredExpenseData.description.split(' ')
    s.forEach(cc=>{
      let temp = cc.split('')
      code = code+temp[0]
    })
    code = code+getRandomInt(1,199)
    const expenseData = {
      id: code,
      ...enteredExpenseData,
    }
    addNewExpense(expenseData)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpense
