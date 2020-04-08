import { healAppReducer } from "../Reducer/patientReducer";
import { InitialState } from "../Objects/InitialState";
import {createStore} from 'redux';
import { addUser } from "../Actions/actionsCreators";
import { patientsData } from "../Objects/patientsData";


const store = createStore(healAppReducer, InitialState);

export default store;