// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  MovieId: string,
  personId: string,
  ratingValue:number
}
export interface IMovie {
  id?: string;
  title: string;
  starring: string;
  duration: string;
  categoryName: string;
  pictureUrl: string,
  videoUrl: string
  
}

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