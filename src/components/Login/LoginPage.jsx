import React from 'react'
import LoginForm from './LoginForm'
import {useSelector} from 'react-redux'



export default function LoginPage(props) {
  const auth = useSelector(state=>state.auth.isLogin)
  return (
    <>
    {auth?
    <div className='loginSuccess'>
        <center>
        <h3 style={{marginTop:'175px',marginBottom:'175px'}}>Login Successful</h3>
        </center>
    </div>
        :
    <LoginForm welcomeOpen={props.welcomeOpen} onlogin={props.onlogin}/>
    }
    </>
  )
}
