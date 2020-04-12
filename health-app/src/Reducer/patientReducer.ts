import { InitialState } from "../Objects/InitialState";
import { updateUserAction, fetchWellnessPlanAction, addUserAction } from "../Actions/actionsCreators";
import { IHealtState } from "../Interfaces/IHealtState";
import { ActionTypes } from "../Actions/actionsTypes";



export const healAppReducer = ( state = InitialState  , action : addUserAction | updateUserAction | fetchWellnessPlanAction ) : IHealtState => {

    switch(action.type) {
        case ActionTypes.ADD_USER :
            return {...state ,user : action.payload}
         case ActionTypes.UPDATE_USER :
            return {...state, user :action.payload}
         case ActionTypes.FETCH_WELLNESS_PLAN :
             return {...state, wellnessPlans : action.payload}
    }

} 