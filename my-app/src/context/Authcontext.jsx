import { createContext, useState } from "react";

export const AuthContext=createContext();

let obj={
    isAuth:false,
    token:null,
};

function AuthContextProvider({children}){
const [cartData,setDataForCart]=useState([]);
    const [auth,setauth]=useState(obj);
    const loginUser=(token)=>{
        setauth({...auth,isAuth:true,token:token,})
    };
    const logoutUser=()=>{
        setauth(obj);
    };

    const adddatasForCart=(e)=>{
        setDataForCart([...cartData,e])
    }
    return(
    <AuthContext.Provider  value={{Userauth:auth,loginUser,logoutUser,adddatasForCart,cartData}}>
        {children}
    </AuthContext.Provider>
    )
};
export default AuthContextProvider;