import React, { useContext } from "react";
import './ExpenseFilter.css'
import { FilterContext } from "../../Contexts/filterContext";



const ExpenseFilter = (props) => {
    let {filterYear,setFilterYear} = useContext(FilterContext)
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value)
        // console.log(event.target.value)
        setFilterYear(event.target.value)
    }
    return (
        <div className="expense-filter">
            <h3 className="expense-filter_heading">Select Year Of Expenditure</h3>
            <div className="expense-filter_control">
                <label htmlFor="Filter by year">
                    <select name="" onChange={dropdownChangeHandler}>
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