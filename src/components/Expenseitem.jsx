import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'
import Card from './Card'
const Expenseitem =(props)=> {
  let data = props.data
  const clickHandler = () => {
    console.log("Clicked")

  }
  // const deleteItem = (e) => {
  //   console.log("Clicked")
  //   console.log(e.target.id)

  // }
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
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={() => delItem(ele.id)}>Delete Item</button>
          </Card>     
        )
      })}
    </Card>

  )
}
export default Expenseitem
