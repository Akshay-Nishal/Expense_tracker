import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import './ProfilePage.css'
import {useSelector, useDispatch} from 'react-redux'
import { authActions } from '../../store/store'


const updateUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key='
const API_KEY = 'AIzaSyD_wbBxYY-wn1p-CwM8sMA8OSqKorbLUSI'
const lookupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key='
const verifyEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='



function ProfilePage() {
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    // console.log(auth)
    const nameRef = useRef('Name')
    const photoUrlRef = useRef('Photo URL')

    const VerifyEmail=()=>{
        let id=auth.currentUserData['idToken']
        console.log("Verify")
        axios.post(`${verifyEmail}${API_KEY}`,{
            requestType : "VERIFY_EMAIL",
            idToken : id,
        })
        .then(res=>{
            // console.log(res)
            window.alert("Email Verification Link Sent")
        })
        .catch(err=>{
            console.log(err.message)
            window.alert(err.message)
        })

    }

    const updateProfile =(event)=>{
        event.preventDefault()
        const enteredName = nameRef.current.value.trim()
        const enteredPhotoUrl = photoUrlRef.current.value.trim()
        // console.log(userCtx.currentUserData)
        if(enteredName && enteredPhotoUrl){
            let id=auth.currentUserData['idToken']
            // console.log(enteredName,enteredPhotoUrl)
            // console.log("_id: ",id)
            axios.post(`${updateUrl}${API_KEY}`,{
                idToken:id,
                headers:{
                    'Content-Type':'application/json'
                },
                displayName:enteredName,
                photoUrl:enteredPhotoUrl
            })
            .then(res=>{
                // console.log(res.data)
                window.alert("Profile updated successfully!!!")
                // localStorage.setItem('currentUserData',(JSON.stringify(res.data)))
                // dispatch(authActions.login(res.data))
            })
            // .then(res=>{
            //     console.log(res.data)
            //     localStorage.setItem('currentUserData',(JSON.stringify(res.data)))
            //     dispatch(authActions.login(res.data))
            //     nameRef.current.value = ''
            //     photoUrlRef.current.value=''
            //     console.log("Successfully set details!")
            // })
            .catch(err=>{
                console.log(err)
                window.alert(err.message)
            })
        }
        else{
            window.alert("Please enter data correctly")
        }

    }
    useEffect(() => {
        let id=auth.currentUserData['idToken']
        axios.post(`${lookupUrl}${API_KEY}`,{
            idToken:id
        })
        .then(res=>{
            // console.log(res.data.users)
            // console.log(res.data.users[0].displayName);
            nameRef.current.value=(res.data.users[0].displayName===undefined?'Name':res.data.users[0].displayName)
            photoUrlRef.current.value=(res.data.users[0].photoUrl===undefined?'Photo Url':res.data.users[0].photoUrl)
            // res.data.users[0].photoUrl
        })
    })
    

  return (
    <div className='profilePage'>
        <form onSubmit={updateProfile}>
            <h2>Personal Details:</h2>
            <label htmlFor="name">Full Name</label>
            <input ref={nameRef} type="text"  id="name" />
            <br />
            <label htmlFor="photoUrl">Profile Photo Url</label>
            <input ref={photoUrlRef} type="text" id="photoUrl" />
            <br />
            <button>Update</button>
        </form>
        <button onClick={VerifyEmail} style={{marginLeft:'50px'}}>Verify Email</button>
    </div>
  )
}

export default ProfilePage
