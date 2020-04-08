import { IHealtState } from "../Interfaces/IHealtState";
import { patientsData } from "./patientsData";
import { wellnessPlansDate } from "./wellnessPlansData";


export const InitialState : IHealtState = {
    isLogged : false,
    patients: patientsData,
    user : patientsData[0],
    wellnessPlans : wellnessPlansDate
}


