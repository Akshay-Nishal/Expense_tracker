import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from '../UI/Card'
import { useState } from 'react'
const Expenseitem =(props)=> {
  const [data, setData] = useState(props.data)
  const updateItem = (num) => {
    console.log(num)
    let x = num
    num = x.replace('e','')
    num = parseInt(num)
    console.log(num)
    console.log("Updated the title")
    let tem = data
    tem[num].title = 'Updated'
    console.log(tem[num])
    setData(tem)
  }

  function delItem(id) {
    let x = document.getElementById(id)
    console.log(x)
    x.remove()
  }

  return (
    <Card className='expenses'>
      {data.map((ele)=>{
        return(
          <Card id={ele.id} key={ele.id} className="expense-item">
            <ExpenseDate Date={ele.date}/>
            <ExpenseDetails title = {ele.title} location={ele.LocationOfExpenditure} amount = {ele.amount}/>
            <button onClick={() => updateItem(ele.id)}>Change Title</button>
            <button onClick={() => delItem(ele.id)}>Delete Item</button>
          </Card>     
        )
      })}
    </Card>

  )
}
export default Expenseitem
