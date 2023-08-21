import { createContext,useState} from "react";

// the actual value that you need to access.
export const ExpenseContext= createContext({
    exs: null,
    setExpenses:() => null,
    filteredExpenses:null,
    setFilteredExpense:() =>null
}) 
/* current context value, as given by the nearest context provider for the given context. */
export const ExpenseProvider = ({children})=>{
    const [exs,setExpenses] = useState(defaultExpenses)
    const [filteredExpenses,setFilteredExpense] = useState(defaultExpenses)
    const value = {exs,setExpenses,filteredExpenses,setFilteredExpense}


    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}



const defaultExpenses = [
    {
      id: 'TP20',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
      LocationOfExpenditure: 'London'
    },
    { 
      id: 'GM15', 
      title: 'Gaming Monitor', 
      amount: 799.49, 
      date: new Date(2020, 2, 12),
      LocationOfExpenditure: 'Delhi'
    },
    {
      id: 'CI256',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Moscow'
    },
    {
      id: 'WD486',
      title: 'Wooden Desk',
      amount: 450,
      date: new Date(2022, 5, 12),
      LocationOfExpenditure: 'California'
    },
    ]

