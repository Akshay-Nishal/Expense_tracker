import React, { useContext, useState } from 'react'
// import Expenseitem from "./components/Expenses/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseContext } from './Contexts/expenseContext';
import { FilterProvider } from './Contexts/filterContext';
import { UserContext } from './Contexts/userContext';
import LoginPage from './components/Login/LoginPage';

const App = () => {
  let {exs,setExpenses} = useContext(ExpenseContext)
  const userCtx = useContext(UserContext)

  return (
    <div>
      {!userCtx.isLogin && <LoginPage/>}
      {userCtx.isLogin && 
      <>
      <NewExpense />
      <FilterProvider>
        <Expenses />
      </FilterProvider>
      </>
      }
      </div>
    );
  }
  export default App;
  
