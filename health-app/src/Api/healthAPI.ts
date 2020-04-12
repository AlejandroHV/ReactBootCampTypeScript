import axios from "axios";
import { IPatient } from "../Interfaces/IPatient";
import https from 'https';

export const login = (email: string, password: string) =>  {
    const instance = axios.create({baseURL:"https://localhost:44336/",method: 'POST' , headers : { 'Access-Control-Allow-Origin' : '*' , 'Accept': 'application/json'}});

   return instance.post<{ user: any }>('users', {
    email,
    password
  })


}


export const putUser = (user : IPatient) =>  {
  
  const instance = axios.create({baseURL:"https://localhost:44336/",method: 'PUT' , headers : { 'Access-Control-Allow-Origin' : '*' , 'Accept': 'application/json'}});

 return instance.put<{ user: any }>('users/' +user.id, 
  user
  
)


}
