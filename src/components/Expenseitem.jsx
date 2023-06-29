import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'

const Expenseitem =(props)=> {
  let data = props.data
  return (
    <div>
      {data.map((ele)=>{
        return(
          <div key={ele.id} className="expense-item">
            <ExpenseDate Date={ele.date}/>
            {console.log(ele.amount)}
            <ExpenseDetails title = {ele.title} location={ele.LocationOfExpenditure} amount = {ele.amount}/>
          </div>     
        )
      })}
    </div>

  )
}
export default Expenseitem
