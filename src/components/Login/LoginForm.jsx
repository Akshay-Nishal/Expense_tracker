import { useState, useRef, useContext } from 'react';
import classes from './LoginForm.module.css';
import { UserContext } from '../../Contexts/userContext';
// import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// import { unstable_HistoryRouter } from 'react-router-dom';
const API_KEY = 'AIzaSyD_wbBxYY-wn1p-CwM8sMA8OSqKorbLUSI'
const urlf = 'https://crudcrud.com/api/61e24d3555214211b01f03433130d1f7'



const LoginForm = () => {
  // const history = useNavigate()
  const userCtx = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setLoading] = useState(false)
  const emailInputRef = useRef()
  const passInputRef = useRef()
  const confPassRef = useRef()

  // const getonlineData =(mail)=>{
  //   let data = []
  //   console.log(mail)
  //   axios.get(`${urlf}/${mail}`).then(res=>{
  //     data = res.data
  //     console.log("Data Len : ",data.length)
  //     if(data.length<1){
  //       axios.post(`${urlf}/${mail}`,{
  //         cart:{
  //           items:[],
  //           totalCartAmount:0,
  //           cartNumber:0
  //       }
  //       }).then(res=>{
  //         console.log(res.data)
  //         localStorage.setItem('currentUserApi',`${urlf}/${mail}`)
  //         localStorage.setItem('urlDataId',res.data['_id'])
  //         cartCtx.onLogin(res.data['cart'])
  //         localStorage.setItem('currentCart',res.data['cart'])
  //       })
  //     }
  //     if(data.length>0){
  //       // console.log(data[1]._id)
  //       // console.log(data[0]['_id'])
  //       console.log((data[0]['cart']))
  //       localStorage.setItem('urlDataId',data[0]['_id'])
  //       localStorage.setItem('currentUserApi',`${urlf}/${mail}`)
  //       cartCtx.onLogin(data[0]['cart'])
  //       localStorage.setItem('currentCart',JSON.stringify(data[0]['cart']))
  //     }
  //   })
  // }


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const loginFormSubmitHandler = (event)=>{
    setLoading(true)
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPass = passInputRef.current.value
    const enteredConfPass = confPassRef.current.value
    // console.log("Login ",enteredEmail,enteredPass)
    if(isLogin){
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPass,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            setLoading(false)
            if(res.ok){
                return(res.json())
            }
            else{
                return res.json().then(data=>{
                    let errorMessage = 'Authentication Failed!'
                    throw new Error(errorMessage)
                })
            }
        })
        .then(data=>{
            // console.log(data)
            userCtx.setlogin(true)
            userCtx.setCurrentUserData(data)
            localStorage.setItem('isLogin',true)
            localStorage.setItem('currentUserData',JSON.stringify(data))
            localStorage.setItem('currentEmail',enteredEmail.replace("@",'').replace('.',''))
            // var ctime = new Date()
            // localStorage.setItem('time',ctime.getMinutes())
        })
        .catch(error=>{
            window.alert(error)
            console.log(error)
        })

    

    }
    else{

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPass,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            setLoading(false)
            if(res.ok){
                return(res.json())
            }
            else{
                return res.json().then(data=>{
                    let errorMessage = 'Email Already Exists!'
                    throw new Error(errorMessage)
                    
                })
            }
        })
        .then(data=>{
            console.log(data)
            userCtx.setlogin(true)
            userCtx.setCurrentUserData(data)
            localStorage.setItem('isLogin',true)
            localStorage.setItem('currentUserData',JSON.stringify(data))
            localStorage.setItem('currentEmail',enteredEmail.replace("@",'').replace('.',''))
        })
        .catch(error=>{
            window.alert(error)
            console.log(error)
        })
    }
  }

  let content = <button onClick={loginFormSubmitHandler}>{isLogin?'Login':'Create Account'}</button>

  if (isLoading) {
    content = <p style={{color:'white'}} >Sending Request...</p>;
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>

        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            ref={passInputRef}
            type='password'
            id='password'
            required
          />
        </div>

        {!isLogin && <div className={classes.control}>
          <label htmlFor='confpassword'>Confirm Password</label>
          <input
            ref={confPassRef}
            type='password'
            id='confpassword'
            required
          />
        </div>}

        <div className={classes.actions}>
            {content}
          <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
