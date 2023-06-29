import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'

export default function Expenseitem(props) {
  let data = props.data
  return (
    <div>
      {data.map((ele)=>{
        return(
          <div key={ele.id} className="expense-item">
            <ExpenseDate Date={ele.date}/>
            <ExpenseDetails title = {ele.title} location={ele.LocationOfExpenditure} price = {ele.price}/>
          </div>     
        )
      })}
    </div>

  )
}
