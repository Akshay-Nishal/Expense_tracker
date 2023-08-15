import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
  const saveExpenseDataHandeler = (enteredExpenseData) =>{
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpense
