import { createContext,useState} from "react";

// the actual value that you need to access.
export const FilterContext= createContext({
    filterYear: null,
    setFilterYear:() => null
}) 
/* current context value, as given by the nearest context provider for the given context. */
export const FilterProvider = ({children})=>{
    const [filterYear,setFilterYear] = useState('All')
    const value = {filterYear,setFilterYear}

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}
