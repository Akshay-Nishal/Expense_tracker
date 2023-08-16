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
    setExpenses(prevx =>[...prevx,newExpense])
  }

  const saveExpenseDataHandeler = (enteredExpenseData) =>{
    let code = ''
    let s = enteredExpenseData.title.split(' ')
    s.forEach(cc=>{
      let temp = cc.split('')
      code = code+temp[0]
    })
    code = code+getRandomInt(1,199)
    const expenseData = {
      id: code,
      ...enteredExpenseData,
    }
    // console.log(expenseData)
    // props.onAddExpense(expenseData)
    addNewExpense(expenseData)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpense
