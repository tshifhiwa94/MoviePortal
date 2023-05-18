import {createContext} from 'react'

export interface IUser{
    id?: string,
    username:string,
    name:string,
    surname:string,
    phone:string
    idNumber:string,
    address:string,
    emailAddress:string,
    password:string
}


export interface ILogin
{
        userNameOrEmailAddress: string,
        password: string,
}

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