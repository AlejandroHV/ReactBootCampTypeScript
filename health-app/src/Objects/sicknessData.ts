import { ISickness } from "../Interfaces/ISickness";


export const sicknessDate  : ISickness[] = 
[
    {
        id : 1, 
        description : "Pneumonia is an infection that inflames the air sacs in one or both lungs",
        name : "Pneumonia", 
        startedDate : new Date(),
        symptoms : ["Chest pain" , "Cough"],
    },
    {
        id : 2, 
        description : "Inflammation of one or more joints, causing pain and stiffness that can worsen with age.",
        name : "Osea", 
        startedDate : new Date(),
        symptoms : [" pain" , "swelling"],
    },
    {
        id : 3, 
        description : "A group of diseases that result in too much sugar in the blood (high blood glucose).",
        name : "Diabetes", 
        startedDate : new Date(),
        symptoms : ["dizzness" , "headeache"],
    }         
]