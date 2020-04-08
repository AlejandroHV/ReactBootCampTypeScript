import { IPatient } from "../Interfaces/IPatient";
import { appointsmentsData } from "./appointmentsData";
import { sicknessDate } from "./sicknessData";


export const patientsData : IPatient[] = [
    {
        id : 1, 
        firstName : "Camilo",
        lastName : "Gutierrez",
        birthDate : new Date(),
        insuranceName : "Sura",
        phoneNumber : "32123123123123",
        location: "United States",
        email : "aaa@gmail",
        appointsments : appointsmentsData.filter(a => a.patientId ===1),
        wellnessPlan : [],
        sickness :sicknessDate.filter(s => s.patientId === 1)
    },
    {
        id : 2, 
        firstName : "Alejandra",
        lastName : "Calderon",
        birthDate : new Date(),
        insuranceName : "Coomeva",
        phoneNumber : "2123",
        location: "Colombia",
        email : "aaa@gmail",
        appointsments : appointsmentsData.filter(a => a.patientId ===2),
        wellnessPlan : [],
        sickness :sicknessDate.filter(s => s.patientId === 2)
    },
    {
        id : 3, 
        firstName : "Marlon",
        lastName : "Cano",
        birthDate : new Date(),
        phoneNumber : "432",
        location: "England",
        email : "aaa@gmail",
        insuranceName : "Sura",
        appointsments : [],
        wellnessPlan : [],
        sickness :[]
    }
]