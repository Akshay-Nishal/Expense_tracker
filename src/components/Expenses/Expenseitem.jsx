import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useContext, useState } from 'react'
import { ExpenseContext } from '../../Contexts/expenseContext'

const Expenseitem =(props)=> {
  // console.log(props)
  // console.log(props.date)
  let {exs,setExpenses} = useContext(ExpenseContext)
  const [data,setData] = useState(props)
  const [title,setTitle] = useState(props.title)
  const [amount,setAmount] = useState(props.amount)
  const updateItem = (num) => {
      console.log("Updated the title")
      setTitle('Title Updated')
    }
    function delItem(id) {
      // let x = document.getElementById(id)
      // console.log(x)
      // x.remove()
      let tem = []
      exs.forEach(e=>{
        if(e.id!==id){
            tem.push(e)
        }
      })
      setExpenses(tem)
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