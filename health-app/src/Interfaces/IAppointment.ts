
export interface IAppointment {
    id : number, 
    ocurredDate : Date, 
    patientId : number,
    doctorName : string, 
    diagnostic : string, 
    medicines : string[],
    
}