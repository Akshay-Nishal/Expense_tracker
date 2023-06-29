import './Expenseitem.css'

export default function Expenseitem(props) {
  let data = props.data
  console.log(data)

  const expenseDate = new Date(2023, 6, 29)
  const expenseTitle = 'Car Insurance'
  const expenseAmmount = 250
  const LocationOfExpenditure = 'Delhi'
  return (
    <div>
      {data.map((ele)=>{
        return(
          <div key={ele.id} className="expense-item">
            {/* {console.log(ele.date.getDate())} */}
            <div>{ele.date.toISOString()}</div>
            <div className="expense-item__description">
              <h2>{ele.title}</h2>
              <h3 className="expense-item__location">{ele.LocationOfExpenditure}</h3>
              <div className="expense-item__price">${ele.amount}</div>
            </div>
          </div>     
        )
      })}
    </div>

  )
}
