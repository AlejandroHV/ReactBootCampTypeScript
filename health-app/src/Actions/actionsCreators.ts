
import { IPatient } from '../Interfaces/IPatient';
import { ActionTypes } from './actionsTypes';
import { IWellnessPlan } from '../Interfaces/IWellnessPlan';


export type addUserAction = {
    type: ActionTypes.ADD_USER;
    payload: IPatient;
}
  
  export type updateUserAction = {
    type: ActionTypes.UPDATE_USER;
    payload: IPatient;
}


 export type addWellnessPlanAction = {
    type: ActionTypes.ADD_WELLNESS_PLAN;
    payload: IPatient;
}


export function addUser(payload : IPatient) : addUserAction{
    return  { type : ActionTypes.ADD_USER  , payload }
}

export function updateUser(payload : IPatient) : updateUserAction{
    return  { type : ActionTypes.UPDATE_USER  , payload }
}

export function addWellnessPlan(payload : IPatient) : addWellnessPlanAction{
    return  { type : ActionTypes.ADD_WELLNESS_PLAN  , payload }
}
