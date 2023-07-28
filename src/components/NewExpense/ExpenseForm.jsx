import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm() {
    const [title,setTitle] = useState()
    const [amount,setAmount] = useState()
    const [date,setDate] = useState()
    
//   const [userInput,setUserInput] = useState({
//     date:'',           //this is a method to combine multiple states together  
//     title:'',
//     amount:''
//   })
    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return { ...prevState,title:event.target.value}   //this method helps to get immediate previous state and coppy it in new state, NOTEEE     prevState isnt a pre defined keyword, we can use any name we want
        // })

        // console.log(userInput.title)
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // })
        // console.log(userInput.amount)
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // })
        // console.log(userInput.date)
    }
  return (
    <form>
        {console.log(title,amount,date)}
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title">Title</label>
                <input id='title' onChange={titleChangeHandler} type="text" />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Amount</label>
                <input id='amount' onChange={amountChangeHandler} type="number" min="0.1" step="0.1"/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input id='date' onChange={dateChangeHandler} type="date" min="2019-01-01" max ="2022-12-31"/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm