import { createContext,useReducer,useState} from "react";


export const ExpenseContext= createContext({
    expences: [],
    addExpence:(item) => null,
    removeExpence:(id) => null

}) 


const defaultExpenses = {
  expences:[
  {
    id: 'TP20',
    description: 'Toilet Paper',
    amount: 94.12,
    category:'Grocery'
  },
  { 
    id: 'GM15', 
    description: 'Gaming Monitor', 
    amount: 799.49, 
    category:'Others'
  },
  {
    id: 'CI256',
    description: 'Car Insurance',
    amount: 294.67,
    category:'Travel'
  },
  {
    id: 'WD486',
    description: 'Wooden Desk',
    amount: 450,
    category:'Others'
  },
  { 
    id: 'CL23', 
    description: 'Shirt', 
    amount: 120.00, 
    category:'Clothes'
  },
  { 
    id: 'FB05', 
    description: 'Fast Food', 
    amount: 25.80, 
    category:'Food'
  },
  ]}


const expenceReducer = (state,action) =>{
  let newList = state.expences
  if(action.type==='Add'){
    console.log("Adding Item")
    console.log(action.item)
    newList.push(action.item)
    return{
      expences:newList
    }
  }
  if(action.type==='Del'){
    console.log("Deleting Item")
    console.log(action.id)
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
    const value = 
    { expences:expenceState.expences,
      addExpence:addExp,
      removeExpence:removeExp
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

