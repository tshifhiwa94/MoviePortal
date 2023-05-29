
export interface IMovie {
  id?: string;
  title: string;
  starring: string;
  duration: string;
  categoryName: string;
  pictureUrl: string,
  videoUrl: string,
  ratingValue?:number,
  rateCount?:number
  
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