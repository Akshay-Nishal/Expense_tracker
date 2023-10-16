import axios from 'axios'
import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../Contexts/userContext'
import './ProfilePage.css'


const updateUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key='
const API_KEY = 'AIzaSyD_wbBxYY-wn1p-CwM8sMA8OSqKorbLUSI'
const lookupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key='
const verifyEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='



function ProfilePage() {
    const userCtx = useContext(UserContext)
    const nameRef = useRef()
    const photoUrlRef = useRef()

    const VerifyEmail=()=>{
        let id=userCtx.currentUserData['idToken']
        console.log("Verify")
        axios.post(`${verifyEmail}${API_KEY}`,{
            requestType : "VERIFY_EMAIL",
            idToken : id,
        })
        .then(res=>{console.log(res)})
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
            let id=userCtx.currentUserData['idToken']
            console.log(enteredName,enteredPhotoUrl)
            console.log("_id: ",id)
            axios.post(`${updateUrl}${API_KEY}`,{
                idToken:id,
                headers:{
                    'Content-Type':'application/json'
                },
                displayName:enteredName,
                photoUrl:enteredPhotoUrl
            })
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('currentUserData',res.data)
                userCtx.setCurrentUserData(res.data)
                nameRef.current.value = ''
                photoUrlRef.current.value=''
            })
            .catch(err=>{
                console.log(err)
                window.alert(err.message)
            })
        }
        else{
            window.alert("Please enter data correctly")
        }

    }
    // useEffect(() => {
    //     let id=userCtx.currentUserData['idToken']
    //     axios.post(`${lookupUrl}${API_KEY}`,{
    //         idToken:id
    //     })
    //     .then(res=>{
    //         console.log(res.data.users)
    //         nameRef.current.value=res.data.users[0].displayName
    //         photoUrlRef.current.value=res.data.users[0].photoUrl

    //     })
    // }, [])
    

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
