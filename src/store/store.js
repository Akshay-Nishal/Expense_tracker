// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'
import axios from 'axios'

const uploadData =(items,amount)=>{
    axios.get(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}.json`)
    .then(res=>{
    //   console.log(res)
      if(res.data==null){
        console.log('No data')
        axios.post(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}.json`,
        {
          expences:items,
          totalAmount:amount
        }
        )
        .then(res=>{console.log(res.data)}).catch(err=>{console.log(err.message)})
      }
      else{
        let key
        for(let k in res.data){
          key = k
          break;
        }
        // console.log(res.data[key])
        axios.put(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}/${key}.json`,{
          expences:items,
          totalAmount:amount
        }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err.message)})
      }
    })
    .catch(err=>{console.log(err.message)})
}
  
const defaultExpenses = {
    expences:[],
    totalAmount:0,
}

const expenceSlice = createSlice({
    name:'expence',
    initialState:defaultExpenses,
    reducers:{
        add(state,action){
            let newList = JSON.parse(JSON.stringify(state.expences))
            let newAmount = parseInt(JSON.parse(JSON.stringify(state.totalAmount)))
            newList.push(action.payload)
            // console.log(newAmount)
            newAmount = newAmount + parseInt(action.payload.amount)
            // console.log(newAmount)
            uploadData(newList,newAmount)
            state.expences = newList
            state.totalAmount = newAmount
            
        },
        delete(state,action){
            let newList = JSON.parse(JSON.stringify(state.expences))
            let ind = newList.findIndex((exp)=>exp.id===action.payload)
            let newAmount = parseInt(JSON.parse(JSON.stringify(state.totalAmount)))
            newAmount = newAmount - newList[ind].amount
            // console.log(ind)
            if(ind===0){
                newList.splice(0,1)
                // console.log(newList)
            }
            else{
                newList.splice(ind,ind)
                // console.log(newList)
            }
            // console.log(newAmount)
            uploadData(newList,newAmount)
            state.expences=newList
            state.totalAmount = newAmount
        },
        update(state,action){
            let newList = JSON.parse(JSON.stringify(state.expences))
            // console.log("Inside store delete with data : ",action.payload)
            let ind = newList.findIndex((exp)=>exp.id===action.payload.id)
            // console.log(ind)
            let newAmount = parseInt(JSON.parse(JSON.stringify(state.totalAmount)))
            newList[ind].description=action.payload.description
            newList[ind].amount = action.payload.amount
            newAmount = newAmount + action.payload.amount
            uploadData(newList,newAmount)
            state.expences = newList
            state.totalAmount = newAmount
        },
        logout(state){
            state.expences = []
            state.totalAmount = 0
        },
        refresh(state,action){
            state.expences = action.payload.data
            state.totalAmount = parseInt(action.payload.am)
        },
    }
})

const initalAuthState={
    isLogin: false,
    currentUserData:''
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initalAuthState,
    reducers:{
        login(state,action){
            state.isLogin=true
            state.currentUserData = action.payload
        },
        logout(state){
            state.isLogin=false
            state.currentUserData = ''
        }
    }
}) 

const initialPremium = {
    premiumActivate : false
}

const premiumSlice = createSlice({
    name:'premium',
    initialState:initialPremium,
    reducers:{
        setPremium(state,action){
            state.premiumActivate = action.payload
        }
    }
}) 



const store = configureStore({      //it  helps to merge multople slice reducer 
    reducer:{
        expence:expenceSlice.reducer,
        auth:authSlice.reducer,
        prem:premiumSlice.reducer
    }
    // reducer:{counter:counterSlice.reducer,}    by this we can merge multiple reducer
})
 
export const authActions = authSlice.actions   //it autogenerates actions for usuth
export const expenceActions = expenceSlice.actions
export const premiumActions = premiumSlice.actions

export default store
