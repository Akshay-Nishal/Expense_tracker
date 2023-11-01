import { useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './Header.css'
import {useSelector, useDispatch} from 'react-redux'
import { authActions } from '../../store/store';



const HeaderNav = (props) =>{
  const auth = useSelector(state=>state.auth.isLogin)
  // const exp = useSelector(state=>state.expence.expences)
  const tot = parseInt(useSelector(state=>state.expence.totalAmount))
  // console.log(tot)
  const dispatch = useDispatch()
  const history = useNavigate()
  useEffect(() => {   
    if(!localStorage.getItem('isLogin')){
      console.log("Not logge in")
      history('/login', { replace: true })
    }
  },[])


  const logoutHandler = () =>{
    dispatch(authActions.logout())
    localStorage.clear()
    history('/login', { replace: true })
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
        { auth && (tot>1000? <button className='premium'>Activate Premium</button> : <p style={{marginRight:'25px',fontSize:'17px'}}>Premium not available</p>) }
        { !auth && <Link to="/login">Login</Link>}
        { auth && <Link to="/profile">Profile</Link>}
        { auth &&  <button onClick={logoutHandler} variant='secondary' className='logoutButton'>Logout</button>}
      </div>
    </div>
    </>
  );
}

export default HeaderNav;