
export interface User{
  name:string;
  surname:string;
  telephoneNumber:string;
  email:string;
  password:string;
  activationMethod: string;
}

export interface LoginCredentials {
  email : string;
  password: string;
}
