import { NextPage } from "next";
import React, { FC,useReducer, useContext, PropsWithChildren,useEffect} from 'react';
import {UserContext,UserActionContext, INITIAL_STATE, ILogin, IUser} from  './context'
import { loginUserRequestAction,createUserRequestAction,logOutUserRequestAction } from "./action";
import { UserReducer } from "./reducer";
import { useMutate } from "restful-react";
import { notification } from "antd";




const UserProvider:FC<PropsWithChildren<any>> =({children})=>{
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

   

    const { mutate:loginPerson } = useMutate({
        path: "TokenAuth/Authenticate",
        verb: "POST",
      });
    
    
      const createUser=async(payload:IUser)=>{

      }
      
    

      const loginUser = (loginPerson) => {
       
         
      };









    
    return (
        <UserContext.Provider value={state} >
            <UserActionContext.Provider value={{loginUser,createUser}}>
                {children}
            </UserActionContext.Provider>
        </UserContext.Provider>
    );

}

function useLoginState() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useAuthState must be used within a Auth Provider");
    }
    return context;
}

function useLoginActions() {
    const context = useContext(UserActionContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a Auth Provider");
    }
    return context;
}

function useUser() {
    return {
        ...useLoginActions(),
        ...useLoginState()
    }
}
export { UserProvider, useUser };

