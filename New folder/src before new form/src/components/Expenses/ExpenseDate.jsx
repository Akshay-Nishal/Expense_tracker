import './ExpenseDate.css'

const ExpenseDate = (props) => {
  let date = props.Date
  // {console.log(typeof date)}
  let month 
  let day 
  let year 
  if(typeof date === 'object'){
      month = date.toLocaleString('en-us',{month:'long'})
      day = date.toLocaleString('en-us', {day:'2-digit'})
      year = date.getFullYear()
    }
    else{
      // {console.log(typeof date)}
      let d = date.split('-')
      month = parseInt(d[0])
      day = parseInt(d[1])
      year = parseInt(d[2])
    }
  return (
    <div  className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpenseDate