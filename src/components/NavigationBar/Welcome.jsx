import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Welcome(props) {
    const welcomeClose=()=>{
        props.welcomeClose()
    }
  return (
    <div style={{position:'absolute', background:'#818181',padding:'50px' , width:"100%"}}>
        <center>
        <h2 >Welcome to Expense Tracker App</h2>
        <h3 style={{marginTop:'15px'}}>Profile is incomplete <Link onClick={welcomeClose} to='/profile'>Complete it now</Link></h3>
        <button className='cancel' onClick={welcomeClose} style={{marginTop:'25px'}}>Cancel</button>
        </center>
      </div>
  )
}


export default Welcome