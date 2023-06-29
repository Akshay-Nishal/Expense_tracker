import './Expenseitem.css'

export default function Expenseitem() {
  const expenseDate = new Date(2023, 6, 29)
  const expenseTitle = 'Car Insurance'
  const expenseAmmount = 250
  const LocationOfExpenditure = 'Delhi'
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h3 className="expense-item__location">{LocationOfExpenditure}</h3>
        <div className="expense-item__price">${expenseAmmount}</div>
      </div>
    </div>
  )
}
