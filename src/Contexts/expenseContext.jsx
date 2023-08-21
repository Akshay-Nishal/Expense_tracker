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
    { 
      id: 'CL23', 
      title: 'Clothing', 
      amount: 120.00, 
      date: new Date(2019, 11, 5),
      LocationOfExpenditure: 'New York'
    },
    { 
      id: 'FB05', 
      title: 'Fast Food', 
      amount: 25.80, 
      date: new Date(2021, 5, 23),
      LocationOfExpenditure: 'Los Angeles'
    },
    { 
      id: 'BK10', 
      title: 'Books', 
      amount: 45.50, 
      date: new Date(2022, 8, 30),
      LocationOfExpenditure: 'Paris'
    },
    { 
      id: 'EL07', 
      title: 'Electronics', 
      amount: 399.99, 
      date: new Date(2021, 1, 7),
      LocationOfExpenditure: 'Tokyo'
    },
    { 
      id: 'CS18', 
      title: 'Coffee Shop', 
      amount: 15.75, 
      date: new Date(2022, 4, 18),
      LocationOfExpenditure: 'Seattle'
    },
    { 
      id: 'MV11', 
      title: 'Movie Tickets', 
      amount: 32.50, 
      date: new Date(2020, 8, 9),
      LocationOfExpenditure: 'Sydney'
    }
    ]

