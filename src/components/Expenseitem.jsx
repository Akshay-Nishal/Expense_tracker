import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from './Card'
const Expenseitem =(props)=> {
  let data = props.data
  return (
    <Card className='expenses'>
      {data.map((ele)=>{
        return(
          <Card key={ele.id} className="expense-item">
            <ExpenseDate Date={ele.date}/>
            <ExpenseDetails title = {ele.title} location={ele.LocationOfExpenditure} amount = {ele.amount}/>
          </Card>     
        )
      })}
    </Card>

  )
}
export default Expenseitem
