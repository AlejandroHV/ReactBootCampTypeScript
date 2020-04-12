import React from "react";
import { IPatient } from "../Interfaces/IPatient";

type ContextProps = {
  isLoggedIn: boolean | null,
  user  : IPatient | null,
  updateContext :( isLoggedIn : boolean , user : IPatient | null) => void 
};

export const MyContext = React.createContext<ContextProps>({
  isLoggedIn: true,
  user : null, 
  updateContext :( isLoggedIn : boolean , user : IPatient | null) =>  {} ,
});