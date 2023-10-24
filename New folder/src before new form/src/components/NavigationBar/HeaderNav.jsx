import { useContext, useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { UserContext } from '../../Contexts/userContext';
// import axios from 'axios';
import './Header.css'


const HeaderNav = (props) =>{
  const history = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('isLogin')){
      console.log("Not logge in")
      history('/login', { replace: true })
    }
  }, [])

  const userCtx = useContext(UserContext)

  const logoutHandler = () =>{
    userCtx.setCurrentUserData('')
    userCtx.setlogin(false)
    localStorage.clear()
    history('/login', { replace: true })
  }


  return (
    <>
    <div className='NavBar flex'>
      <div className='leftNAv' >
      {userCtx.isLogin?
        <Link to='/'>Expense Tracker</Link>
      :
      <h2>LOGIN TO VIEW EXPENCE TRACKER</h2>
      }
      </div>
      <div className="rightNav flex">
          { !userCtx.isLogin && <Link to="/login">Login</Link>}
          { userCtx.isLogin && <Link to="/profile">Profile</Link>}
          { userCtx.isLogin &&  <button onClick={logoutHandler} variant='secondary' className='logoutButton'>Logout</button>}
      </div>
    </div>
    </>
  );
}

export default HeaderNav;