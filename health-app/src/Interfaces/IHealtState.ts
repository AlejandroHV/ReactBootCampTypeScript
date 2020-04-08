import { IPatient } from "./IPatient";
import { IWellnessPlan } from "./IWellnessPlan";

export interface IHealtState {
    isLogged : boolean,
    user : IPatient,
    patients : IPatient[],
    wellnessPlans : IWellnessPlan[]
}