import React, { useContext, useEffect, useState } from 'react'
// import Expenseitem from "./components/Expenses/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseContext } from './Contexts/expenseContext';
import { FilterProvider } from './Contexts/filterContext';
import { UserContext } from './Contexts/userContext';
import LoginPage from './components/Login/LoginPage';
import Logout from './components/Logout/Logout';

const App = () => {
  let {exs,setExpenses} = useContext(ExpenseContext)
  const userCtx = useContext(UserContext)
  const [welcomeShow,setWelcome]=useState(false)
  const [login,setlogin] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem('isLogin')==='true'){
      console.log("Heree")
      setWelcome(true)
      userCtx.setlogin(true)
      userCtx.setCurrentUserData(JSON.parse(localStorage.getItem('currentUserData')))
      // setlogin(true)
    }
  }, [])
  
  const welcomeClose = ()=>{
    setWelcome(false)
  }
  
  return (
    <div>
      {!welcomeShow && <div style={{position:'absolute', background:'#818181',padding:'50px' , width:"100%"}}>
        <center>
        <h2 >Welcome to Expense Tracker App</h2>
        <button onClick={welcomeClose} style={{marginTop:'50px'}}>Ok</button>
        </center>
      </div>}
      {
        userCtx.isLogin?
        <>  
      <Logout/>
      <NewExpense />
      <FilterProvider>
        <Expenses />
      </FilterProvider>
      </>
        :
        <LoginPage/>
      }
      </div>
    );
  }
  export default App;
  
