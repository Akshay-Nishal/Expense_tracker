import React from 'react'
import './ExpenseForm.css'
function ExpenseForm() {
    const titleChangeHandler = (event) =>{
        console.log(event.target.value)
    }
  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title">Title</label>
                <input id='title' onChange={titleChangeHandler} type="text" />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Amount</label>
                <input id='amount' type="number" min="0.1" step="0.1"/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input id='date' type="date" min="2019-01-01" max ="2022-12-31"/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm