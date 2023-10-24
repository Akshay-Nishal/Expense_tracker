import React, { useContext } from 'react'
import LoginForm from './LoginForm'
import { UserContext } from '../../Contexts/userContext'
import axios from 'axios'



export default function LoginPage() {
    const userCtx = useContext(UserContext)
  return (
    <>
    {userCtx.isLogin?
    <div className='loginSuccess'>
        <center>
        <h3 style={{marginTop:'175px',marginBottom:'175px'}}>Login Successful</h3>
        </center>
    </div>
        :
    <LoginForm/>
    }
    </>
  )
}
