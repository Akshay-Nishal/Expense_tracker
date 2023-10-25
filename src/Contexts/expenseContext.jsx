import axios from "axios";
import { createContext,useReducer,useState} from "react";


export const ExpenseContext= createContext({
    expences: [],
    addExpence:(item) => null,
    removeExpence:(id) => null,
    onRefresh:(data)=>null,
    clearData:()=>null,
    updateExpence:()=>null,

}) 

const uploadData =(items)=>{
  axios.post(`https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${localStorage.getItem('currentEmail')}.json`,{
    expences:items
  })
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err.message)
  })
}

const defaultExpenses = {
  expences:[]}


const expenceReducer = (state,action) =>{
  let newList = state.expences
  if(action.type==='Add'){
    newList.push(action.item)
    uploadData(newList)

    return{
      expences:newList
    }
  }
  if(action.type==='Del'){
    let ind = state.expences.findIndex((exp)=>exp.id===action.id)
    console.log(ind)
    if(ind===0){
      newList.splice(0,1)
      console.log(newList)
    }
    else{
      newList.splice(ind,ind)
      console.log(newList)
    }
    uploadData(newList)
    return{
      expences:newList
    }
  }
  if(action.type==='Update'){
    let ind = state.expences.findIndex((exp)=>exp.id===action.data.id)
    console.log(ind)
    newList[ind].description=action.data.description
    newList[ind].amount = action.data.amount
    uploadData(newList)
    return{
      expences:newList
    }
  }
  if(action.type==='Logout'){
    console.log("Data Cleared")
    return{
      expences:action.data
    }
  }
  if(action.type==='SetData'){
    console.log("Fetched data from firebase : ")
    console.log(action.data)
    return{
      expences:action.data
    }
  }
  return(defaultExpenses)

}


export const ExpenseProvider = ({children})=>{
  const [expenceState, dispatchState] = useReducer(expenceReducer,defaultExpenses)
  const addExp = (item) =>{
    dispatchState({type:'Add',item:item})
  }
  const removeExp = (id) =>{
    dispatchState({type:'Del',id:id})
  }
  const updateExp = (data) =>{
    dispatchState({type:'Update',data:data})
  }
  const setData = (data) =>{
    dispatchState({type:'SetData',data:data})
  }
  const clearDa = () =>{
    console.log("Logginh oit")
    dispatchState({type:'Logout',data:[]})
  }
    const value = 
    { expences:expenceState.expences,
      addExpence:addExp,
      removeExpence:removeExp,
      onRefresh:setData,
      clearData:clearDa,
      updateExpence:updateExp,
    }


    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}









// const defaultExpenses = [
//     {
//       id: 'TP20',
//       description: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2019, 7, 14),
//       LocationOfExpenditure: 'London'
//     },
//     { 
//       id: 'GM15', 
//       description: 'Gaming Monitor', 
//       amount: 799.49, 
//       date: new Date(2020, 2, 12),
//       LocationOfExpenditure: 'Delhi'
//     },
//     {
//       id: 'CI256',
//       description: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//       LocationOfExpenditure: 'Moscow'
//     },
//     {
//       id: 'WD486',
//       description: 'Wooden Desk',
//       amount: 450,
//       date: new Date(2022, 5, 12),
//       LocationOfExpenditure: 'California'
//     },
//     { 
//       id: 'CL23', 
//       description: 'Clothing', 
//       amount: 120.00, 
//       date: new Date(2019, 11, 5),
//       LocationOfExpenditure: 'New York'
//     },
//     { 
//       id: 'FB05', 
//       description: 'Fast Food', 
//       amount: 25.80, 
//       date: new Date(2021, 5, 23),
//       LocationOfExpenditure: 'Los Angeles'
//     },
//     { 
//       id: 'BK10', 
//       description: 'Books', 
//       amount: 45.50, 
//       date: new Date(2022, 8, 30),
//       LocationOfExpenditure: 'Paris'
//     },
//     { 
//       id: 'EL07', 
//       description: 'Electronics', 
//       amount: 399.99, 
//       date: new Date(2021, 1, 7),
//       LocationOfExpenditure: 'Tokyo'
//     },
//     { 
//       id: 'CS18', 
//       description: 'Coffee Shop', 
//       amount: 15.75, 
//       date: new Date(2022, 4, 18),
//       LocationOfExpenditure: 'Seattle'
//     },
//     { 
//       id: 'MV11', 
//       description: 'Movie Tickets', 
//       amount: 32.50, 
//       date: new Date(2020, 8, 9),
//       LocationOfExpenditure: 'Sydney'
//     }
//     ]

