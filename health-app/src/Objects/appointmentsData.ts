import { IAppointment } from "../Interfaces/IAppointment";



export const appointsmentsData : IAppointment[] = 
[
    {
        id : 1, 
        doctorName : "Manuel Alonso",
        diagnostic : "The patient is sick",
        ocurredDate : new Date(),
        medicines : ["Acetanomifen", "Dolex"],
        patientId : 1,
    },
    {
        id : 2, 
        doctorName : "Samuel Latora",
        diagnostic : "It is just a cold",
        ocurredDate : new Date(),
        medicines : [],
        patientId : 2,
    },
    {
        id : 3, 
        doctorName : "Manuel Alonso",
        diagnostic : "The patient remains  sick",
        ocurredDate : new Date(),
        medicines : ["Antibiotics", "Dolex"],
        patientId : 1,
    },
    {
        id : 4, 
        doctorName : "Manuel Alonso",
        diagnostic : "The patient remains  sick",
        ocurredDate : new Date(),
        medicines : ["Antibiotics", "Dolex", "Dolorant"],
        patientId : 1,
    }



]
