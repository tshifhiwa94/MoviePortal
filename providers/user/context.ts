import {createContext} from 'react'
import { ILogin, IUser } from '../../interfaces';



export interface IUserStateContext {
    readonly User?:IUser;
    readonly Userlogeddin? :ILogin;
    

}
export const INITIAL_STATE:IUserStateContext={}



export interface IUserActionContext{
    createUser?:(payload:IUser) => void;
    loginUser?:(payload:ILogin) => void;
    logOutUser?:() => void;

}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE)
const UserActionContext=createContext<IUserActionContext>({})


export {UserContext,UserActionContext}