import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useState } from 'react'
const Expenseitem =(props)=> {
  // console.log(props)
  const [data,setData] = useState(props)
  const [title,setTitle] = useState(props.title)
  const [amount,setAmount] = useState(props.amount)
  const updateItem = (num) => {
      console.log("Updated the title")
      setTitle('Title Updated')
    }
    function delItem(id) {
      let x = document.getElementById(id)
      console.log(x)
      x.remove()
    }
    const updateAmount = (num) => {
      console.log("Updated the title")
      let am = parseFloat(amount)
      am = am+100
      setAmount(am)
    }
  
  return (
    // <Card className='expenses'>
      <Card id = {data.id} key={data.id} className="expense-item">
        <ExpenseDate Date={data.date}/>
        <ExpenseDetails title = {title} location={data.LocationOfExpenditure} amount = {amount}/>
        <button className='CT' onClick={updateItem}>Change Title</button>
        <button className='Ad' onClick={updateAmount}>Add $100</button>
        <button className='Del' onClick={() => delItem(data.id)}>Delete Item</button>
      </Card>     
    // </Card>

  )
}
export default Expenseitem