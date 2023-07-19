import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useState } from 'react'
const Expenseitem =(props)=> {
  // console.log(props)
  const [data,setData] = useState(props)
  const [title,setTitle] = useState(props.title)
  const updateItem = (num) => {
      console.log("Updated the title")
      setTitle('Title Updated')
    }
    function delItem(id) {
      let x = document.getElementById(id)
      console.log(x)
      x.remove()
    }
  
  return (
    // <Card className='expenses'>
      <Card id = {data.id} key={data.id} className="expense-item">
        <ExpenseDate Date={data.date}/>
        <ExpenseDetails title = {title} location={data.LocationOfExpenditure} amount = {data.amount}/>
        <button onClick={updateItem}>Change Title</button>
        <button onClick={() => delItem(data.id)}>Delete Item</button>
      </Card>     
    // </Card>

  )
}
export default Expenseitem

    // const [data, setData] = useState(props.data)
    // const updateItem = (num) => {
    //   console.log(num)
    //   let x = num
    //   num = x.replace('e','')
    //   num = parseInt(num)
    //   console.log(num)
    //   console.log("Updated the title")
    //   let tem = data
    //   tem[num].title = 'Updated'
    //   console.log(tem[num])
    //   setData(tem)
    // }
  
    // function delItem(id) {
    //   let x = document.getElementById(id)
    //   console.log(x)
    //   x.remove()
    // }