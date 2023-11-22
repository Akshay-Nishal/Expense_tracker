import { useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './Header.css'
import {useSelector, useDispatch} from 'react-redux'
import { authActions, expenceActions, premiumActions } from '../../store/store';
import {CSVLink} from 'react-csv'




const HeaderNav = (props) =>{
  const auth = useSelector(state=>state.auth.isLogin)
  const prem = useSelector(state=>state.prem.premiumActivate)
  const totalAm = useSelector(state=>state.expence.totalAmount)
  // console.log(totalAm)
  // console.log("Premium State : ",prem)
  const exp = useSelector(state=>state.expence.expences)
  const tot = parseInt(useSelector(state=>state.expence.totalAmount))
  // console.log(exp)
  const dispatch = useDispatch()
  const history = useNavigate()

  const headers=[
    {label: 'ID', key:'id'},
    {label: 'Amount', key:'amount'},
    {label: 'Category', key:'category'},
    {label: 'Description', key:'description'}
  ]

  const csvLink = {
    filename:"expenceDate.csv",
    headers:headers,
    data:exp
  }

  useEffect(() => {  
    if(!localStorage.getItem('isLogin')){
      console.log("Not logge in")
      dispatch(expenceActions.logout())
      history('/login', { replace: true })
    }
  },[])


  const logoutHandler = () =>{
    dispatch(authActions.logout())
    localStorage.clear()
    history('/login', { replace: true })
  }

  const changePremium =()=>{
    console.log("Activating Premium")
    localStorage.setItem('prem',!prem)
    dispatch(premiumActions.setPremium(!prem))
  }

  return (
    <>
    <div className='NavBar flex'>
      <div className='leftNAv' >
      {auth?
        <Link to='/'>Expense Tracker</Link>
      :
      <h2>LOGIN TO VIEW EXPENCE TRACKER</h2>
      }
      </div>
      <div className="rightNav flex">
        { prem===true && <button className='downloadButton'>
          <CSVLink className='CSV' {...csvLink}>
            Download CSV
          </CSVLink>
          </button> }
        { auth && (tot>1000? <button onClick={changePremium} className='premium'>{prem===false ?'Activate Premium':'Deactivate Premium'}</button> : <p style={{marginRight:'25px',fontSize:'17px'}}>Premium not available</p>) }
        { !auth && <Link to="/login">Login</Link>}
        { auth && <Link to="/profile">Profile</Link>}
        { auth &&  <button onClick={logoutHandler} variant='secondary' className='logoutButton'>Logout</button>}
      </div>
    </div>
    </>
  );
}

export default HeaderNav;