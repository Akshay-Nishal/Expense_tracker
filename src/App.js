import React from "react";
import Expenseitem from "./components/Expenses/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e0',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'London'
    },
    { 
      id: 'e1', 
      title: 'New TV', 
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
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'California'
    },
  ];
  return (
      <div>
        <NewExpense/>
        <Expenses data = {expenses}/>
      </div>
    );
}


  export default App;
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expenseitem,{data:expenses})
  // );