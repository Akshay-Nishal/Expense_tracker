import React, { useContext, useEffect, useState} from "react";
import './ExpenseFilter.css'
// import { FilterContext } from "../../Contexts/filterContext";
import { ExpenseContext } from "../../Contexts/expenseContext";



const ExpenseFilter = (props) => {
    let {exs,setExpenses,filteredExpenses,setFilteredExpense} = useContext(ExpenseContext)
    // let {filterYear,setFilterYear} = useContext(FilterContext)
    const [filterYear,setFilterYear] = useState('All')
    useEffect(()=>{
        setFilterYear('All')
        setFilteredExpense(exs)
    },[exs])
    const filterExpenses = (year) =>{
        // console.log("Filter function called with year : ",year)
        if(year==='All'){
            setFilteredExpense(exs)
        }
        else{
            let tem = []
            // setFilteredExpense([])
            exs.forEach((d)=>{
                let fd
                if(typeof d.date==='object'){
                  fd = d.date.getFullYear().toString()
                }
                else{
                  let tem = d.date.split('-')
                  fd = tem[0]
                }
                if(fd===year){
                    tem.push(d)
                }
                setFilteredExpense(tem)
            })
        }
    }
    const dropdownChangeHandler = (event) =>{
        // // props.onChangeFilter(event.target.value)
        // console.log(event.target.value)
        setFilterYear(event.target.value)
        filterExpenses(event.target.value)
    }
    
    return (
        <div className="expense-filter">
            <h3 className="expense-filter_heading">Select Year Of Expenditure</h3>
            <div className="expense-filter_control">
                <label htmlFor="Filter by year">
                    <select name="" value={filterYear} onChange={dropdownChangeHandler}>
                        <option value="All">All</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default ExpenseFilter