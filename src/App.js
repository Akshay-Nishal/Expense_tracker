import React, { useContext, useEffect, useState } from 'react'
// import Expenseitem from "./components/Expenses/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { BrowserRouter, Route, Link, NavLink, Routes, Navigate} from 'react-router-dom';
import { ExpenseContext } from './Contexts/expenseContext';
import { UserContext } from './Contexts/userContext';
import LoginPage from './components/Login/LoginPage';
import HeaderNav from './components/NavigationBar/HeaderNav';
import Welcome from './components/NavigationBar/Welcome';
import ExpenseApp from './components/Expenses/ExpenseApp';
import ProfilePage from './components/Profile/ProfilePage';
import axios from 'axios';

const App = () => {
  let expCtx = useContext(ExpenseContext)
  const userCtx = useContext(UserContext)
  const [welcomeShow,setWelcome]=useState(false)
  const [login,setlogin] = useState(false)

  const getUserData =()=>{
    axios.get(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}.json`).then(res=>{
        if(res.data!=null){
          console.log(res.data)
          let d = []
          let k = ''
          for (let key in res.data){
            k = key
          }
          d=res.data[k].expences
          console.log(d)
          expCtx.onRefresh(d)
        }
      })
  }
  
  useEffect(() => {
    if(localStorage.getItem('isLogin')==='true'){
      console.log("Heree")
      setWelcome(true)
      userCtx.setlogin(true)
      userCtx.setCurrentUserData(JSON.parse(localStorage.getItem('currentUserData')))
      getUserData()
      
    }
  }, [])
  
  const welcomeClose = ()=>{
    setWelcome(false)
  }
  
  return (
    <BrowserRouter>
      {/* {welcomeShow && <Welcome welcomeClose={welcomeClose}/>} */}
      <HeaderNav/>

      <Routes>
      {(userCtx.isLogin)?
        <>
        <Route path="/" element={<ExpenseApp/>}t ></Route>
        { userCtx.isLogin && <Route path="/profile" element={<ProfilePage/>} ></Route>}
        { !userCtx.isLogin && <Route path="/login" element={<LoginPage/>} ></Route>}
        <Route path="*" element={<Navigate to='/'/>} ></Route>
        </>
        :
        <>
        <Route path="/login" element={<LoginPage onlogin={getUserData}/>} ></Route>
        <Route path="*" element={<Navigate to='/login'/>} ></Route>
        </>
        }
      </Routes>
    </BrowserRouter>
    );
  }
  export default App;
  
