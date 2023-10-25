import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useContext, useRef, useState } from 'react'
import { ExpenseContext } from '../../Contexts/expenseContext'

const Expenseitem =(props)=> {
  const updatedDescription = useRef()
  const updatedAmount = useRef()
  let expCtx = useContext(ExpenseContext)
  const [showEdit,setShowEdit] = useState(false)  
  function delItem(id) {
    console.log("Deleted Successfully")
    expCtx.removeExpence(id)
  }
  const openEdit =()=>{
    setShowEdit(true)
  }
  const closeEdit=()=>{
    setShowEdit(false)
  }
  const updateDetails = () =>{
    let newDetail = updatedDescription.current.value
    let newAmount = updatedAmount.current.value
    if(newAmount && newDetail){
      let data={
        id:props.id,
        description:newDetail,
        amount:newAmount
      }
      console.log("Updated successfully")
      expCtx.updateExpence(data)
      closeEdit()
    }
    else{
      window.alert("Please enter all update values")
    }
  }  
  return (
      <Card id = {props.id} key={props.id} className="expense-item">
        {showEdit && <div className='editform'>
          <h3>Edit Details</h3>
          <div>
          <label htmlFor="newDescription">Description</label>
          <input ref={updatedDescription} type="text"placeholder={props.description} id="newDescription" />
          <label htmlFor="newAmount">Amount</label>
          <input ref={updatedAmount} type="number"placeholder={props.amount} id="newAmount" />
          <button className='saveButton' onClick={updateDetails}>Save</button>
          <button className='closeButton' onClick={closeEdit}>Cancel</button>
          </div>
        </div>}
        {/* <ExpenseDate Date={props.date}/> */}
        <ExpenseDetails category={props.category} title = {props.description} amount={props.amount} />
        <button className='openEdit' onClick={openEdit}>Edit</button>
        <button className='Del' onClick={() => delItem(props.id)}>Delete Item</button>
      </Card>     
  )
}
export default Expenseitem