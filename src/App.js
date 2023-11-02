import React, {useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HeaderNav from './components/NavigationBar/HeaderNav';
import ExpenseApp from './components/Expenses/ExpenseApp';
import ProfilePage from './components/Profile/ProfilePage';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { authActions, expenceActions, premiumActions } from './store/store';
import Welcome from './components/NavigationBar/Welcome'
import './App.css'

const App = () => {
  // const exp = useSelector(state=>state.expence.expences)
  const auth = useSelector(state=>state.auth.isLogin)
  const dispatch = useDispatch()
  const [welcomeShow,setWelcome]=useState(false)
  const prem = useSelector(state=>state.prem.premiumActivate)



  const getUserData =()=>{
    axios.get(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}.json`).then(res=>{
        if(res.data!=null){
          // console.log(res.data)
          let d = []
          let t = 0
          let k = ''
          for (let key in res.data){
            k = key
            break
          }
          // console.log(res.data)
          d=res.data[k].expences 
          t=parseInt(res.data[k].totalAmount)
          dispatch(expenceActions.refresh({data:d,am:t}))
        }
      }).then(res=>{}).catch(err=>console.log(err.message))
  }
  
  useEffect(() => {
    if(localStorage.getItem('isLogin')==='true'){
      setWelcome(true)
      dispatch(authActions.login(JSON.parse(localStorage.getItem('currentUserData'))))
      if(localStorage.getItem('prem')){
        // console.log("Heree")
        dispatch(premiumActions.setPremium(JSON.parse(localStorage.getItem('prem'))))
      }
      getUserData()
    }
  },[])
  
  const welcomeClose = ()=>{
    setWelcome(false)
  }
  const welcomeOpen = ()=>{
    setWelcome(true)
  }
  
  return (
    <div className={prem===true?'dark':'light'}>

    <BrowserRouter>
      {/* {welcomeShow && <Welcome welcomeClose={welcomeClose}/>} */}
      <HeaderNav/>

      <Routes>
      {(auth)?
        <>
        <Route path="/" element={<ExpenseApp/>}t ></Route>
        { auth && <Route path="/profile" element={<ProfilePage/>} ></Route>}
        { !auth && <Route path="/login" element={<LoginPage/>} ></Route>}
        <Route path="*" element={<Navigate to='/'/>} ></Route>
        </>
        :
        <>
        <Route path="/login" element={<LoginPage welcomeOpen={welcomeOpen} onlogin={getUserData}/>} ></Route>
        <Route path="*" element={<Navigate to='/login'/>} ></Route>
        </>
        }
      </Routes>
    </BrowserRouter>
        </div>
    );
  }
  export default App;
  
