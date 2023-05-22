import {createAction} from 'redux-actions';
import { IUserStateContext } from './context';
import { ILogin, IUser } from '../../interfaces';



export enum UserActionEnum{
    createUserRequest = 'CREATE',
    loginUserRequest = 'LOGIN',
    logOutUserRequest = 'LOGOUT',
}


export const createUserRequestAction = createAction<IUserStateContext , IUser>(UserActionEnum.createUserRequest,(User)=>({User}))
export const loginUserRequestAction = createAction<IUserStateContext , ILogin>(UserActionEnum. loginUserRequest,(Userlogeddin)=>({Userlogeddin}))
export const logOutUserRequestAction = createAction<IUserStateContext >(UserActionEnum.logOutUserRequest,()=>({}))
