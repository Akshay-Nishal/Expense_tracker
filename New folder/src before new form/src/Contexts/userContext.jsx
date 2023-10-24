import { createContext,useState } from "react";

// the actual value that you need to access.
export const UserContext= createContext({
    isLogin:false,
    setlogin:() => null,
    currentUserData:{},
    setCurrentUserData:()=>null
})
/* current context value, as given by the nearest context provider for the given context. */
export const UserProvider = ({children})=>{
    const [currentUserData,setCurrentUserData] = useState(null)
    const [isLogin,setlogin] = useState(false)
    const values = {
        isLogin,
        currentUserData,
        setCurrentUserData,
        setlogin
    }


    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

