import React, { useRef, useState } from 'react'
import './ExpenseForm.css'
import { useDispatch} from 'react-redux'
import { expenceActions } from '../../store/store'



function ExpenseForm(props) {
    // const exp = useSelector(state=>state.expence.expences)
    const dispatch = useDispatch()
    const [activeForm,setActiveForm] = useState(true)
    const moneyRef = useRef()
    const descriptionRef = useRef()
    const categoryRef = useRef()

    function getRandomInt(min,max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        let enteredDescription =  descriptionRef.current.value
        let enteredAmount = moneyRef.current.value
        let enteredCategory = categoryRef.current.value

        if(enteredAmount && enteredCategory && enteredDescription){
            let code = ''
            let s = enteredDescription.split(' ')
            s.forEach(cc=>{
              let temp = cc.split('')
              code = code+temp[0]
            })
            code = code+getRandomInt(1,199)
            const enteredData = {
                id:code,
                description :  enteredDescription,
                amount : enteredAmount,
                category : enteredCategory
            }
            dispatch(expenceActions.add(enteredData))
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
                    <label htmlFor="title">Description</label>
                    <input id='title' defaultValue={'Item'} ref={descriptionRef} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' defaultValue={60} ref={moneyRef} type="number" min="0.1" step="0.1"/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="category">Category</label>
                    <select ref={categoryRef} name="" id="">
                        <option value="Food">Food</option>
                        <option value="Travel">Feul and Travel</option>
                        <option value="Medical">Medical</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Clothes">Clothing</option>
                        <option value="Others">Others</option>
                    </select>
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