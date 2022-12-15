import { createContext, useState } from "react";

export const AuthContext=createContext();

let obj={
    isAuth:false,
    token:null,
};

function AuthContextProvider({children}){

    const [auth,setauth]=useState(obj);
    const loginUser=()=>{
        setauth({...auth,isAuth:true,token:'token',})
    };
    const logoutUser=()=>{
        setauth(obj);
    };
    return(
    <AuthContext.Provider  value={{auth,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
    )
};
export default AuthContextProvider;