import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/userContext'
import './Logout.css'

function Logout() {
    const userCtx = useContext(UserContext)
    console.log(userCtx.currentUserData )
    const logoutHandler=()=>{
        userCtx.setCurrentUserData('')
        userCtx.setlogin(false)
        localStorage.clear()
    }
  return (
    <div className='logoutDiv'>
        <center>
        <h2>Welcome {userCtx.currentUserData.displayName?userCtx.currentUserData.displayName : 'User'}</h2>
        <button onClick={logoutHandler}>Logout</button>
        </center>
    </div>
  )
}

export default  Logout
