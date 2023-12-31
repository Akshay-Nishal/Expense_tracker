import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredtitle,setTitle] = useState()
    const [enteredamount,setAmount] = useState()
    const [entereddate,setDate] = useState()
    const [enteredLocation,setLocation] = useState()
    const [activeForm,setActiveForm] = useState(true)

    const calcDate = (tem) =>{
        let d = tem.split('-')
        console.log(d)
        let x = new Date(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]))
        console.log(x)
        return(x)

    }

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
        // calcDate(entereddate)
    }
    const locationChangeHandler = (event) =>{
        setLocation(event.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const enteredData = {
            title :  enteredtitle,
            amount : enteredamount,
            date :   calcDate(entereddate),
            LocationOfExpenditure: enteredLocation
        }
        console.log(enteredData)
        if(enteredData.title && enteredData.amount && enteredData.date && enteredData.LocationOfExpenditure){
            props.onSaveExpenseData(enteredData)
            setTitle('')
            setAmount('')
            setDate('')
            setLocation('')
        }
        else{
            window.alert("Please Enter All values")
        }
    }
    const changeActive = () =>{
        (activeForm===true)?
        setActiveForm(false)
        :
        setActiveForm(true)
    }
return (
    <div>
        { (activeForm===false) ?
        <button onClick={changeActive}>Add new expene</button>
        :
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input id='title' value={enteredtitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' value={enteredamount} onChange={amountChangeHandler} type="number" min="0.1" step="0.1"/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="location">Location</label>
                    <input id='location' value={enteredLocation} onChange={locationChangeHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input id='date' value={entereddate} onChange={dateChangeHandler} type="date" min="2019-01-01" max ="2022-12-31"/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
            <button onClick={changeActive}>Cancel</button>
        </form>
        }
    </div>
  )
}

export default ExpenseForm

// document.getElementById('amount')..getElementById('title')..getElementById('date').   const [userInput,setUserInput] = useState({
    

//     date:'',           //this is a method to combine multiple states together  
    //     title:'',
    //     amount:''
    //   })
    
    
    
    
    
    // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return { ...prevState,title:event.target.value}   //this method helps to get immediate previous state and coppy it in new state, NOTEEE     prevState isnt a pre defined keyword, we can use any name we want
        // })

        // console.log(userInput.title)







        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // })
        // console.log(userInput.amount)




                // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // })
        // console.log(userInput.date)