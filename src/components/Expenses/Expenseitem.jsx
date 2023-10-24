import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useContext, useState } from 'react'
import { ExpenseContext } from '../../Contexts/expenseContext'

const Expenseitem =(props)=> {
  // console.log(props)
  // console.log(props.date)
  let expCtx = useContext(ExpenseContext)
  const [data,setData] = useState(props)
  const [title,setTitle] = useState(props.description)
  const [amount,setAmount] = useState(props.amount)
  
  function delItem(id) {
    expCtx.removeExpence(id)
  }
  
  return (
      <Card id = {data.id} key={data.id} className="expense-item">
        {/* <ExpenseDate Date={data.date}/> */}
        <ExpenseDetails category={props.category} title = {title} location={data.LocationOfExpenditure} amount = {amount}/>
        <button className='Del' onClick={() => delItem(data.id)}>Delete Item</button>
      </Card>     
  )
}
export default Expenseitem