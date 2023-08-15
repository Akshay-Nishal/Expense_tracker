import React, { useState } from 'react'
// import Expenseitem from "./components/Expenses/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses,setExps] = useState(defaultExpenses)

  const addNewExpense = (newExpense) =>{
    console.log("In App.JS")
    // console.log("NEW Expense : " , newExpense)
    setExps((prevState) => {return [...prevState, newExpense]})
    // let temp = expenses
    // temp.push(newExpense)
    // setExps(temp)
    // console.log(expenses)
    console.log("Updated : ", expenses)
  }

  return (
      <div>
        <NewExpense onAddExpense = {addNewExpense}/>
        <Expenses data = {expenses}/>
      </div>
    );
}
export default App;


  
const defaultExpenses = [
{
  id: 'e0',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),
  LocationOfExpenditure: 'London'
},
{ 
  id: 'e1', 
  title: 'Gaming Monitor', 
  amount: 799.49, 
  date: new Date(2021, 2, 12),
  LocationOfExpenditure: 'Delhi'
},
{
  id: 'e2',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
  LocationOfExpenditure: 'Moscow'
},
{
  id: 'e3',
  title: 'Wooden Desk',
  amount: 450,
  date: new Date(2021, 5, 12),
  LocationOfExpenditure: 'California'
},
]





// return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expenseitem,{data:expenses})
  // );
  