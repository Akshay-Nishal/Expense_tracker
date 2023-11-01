const ExpenseDetails = (props) => {
    let {title,amount,category} = props
  return (
    <div className="expense-item__description">
        <h2>{title}</h2>
        <b>{category}</b>
        <div className="expense-item__price">${amount}</div>
    </div>
  )
}

export default ExpenseDetails