import './Expenseitem.css'

export default function Expenseitem() {
  return (
    <div className="expense-item">
      <div>June 29th 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$250</div>
      </div>
    </div>
  )
}
