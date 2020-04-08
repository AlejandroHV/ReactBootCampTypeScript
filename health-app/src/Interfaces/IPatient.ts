import { ISickness } from "./ISickness";
import { IAppointment } from "./IAppointment";
import { IWellnessPlan } from "./IWellnessPlan";

export interface IPatient {
    id : number, 
    firstName : string, 
    lastName : string, 
    insuranceName : string, 
    birthDate : Date,
    location : string,
    phoneNumber: string,
    email : string,
    sickness : ISickness []
    appointsments : IAppointment[], 
    wellnessPlan : IWellnessPlan[]
}

