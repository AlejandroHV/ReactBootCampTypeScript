import { IPatient } from "./Interfaces/IPatient";
import React from 'react';
import { MyContext } from "./AuthContext/AuthContext";
import App from "./App";
import LoginForm from "./Components/LoginForm";
import { putUser } from "./Api/healthAPI";

type LoginState ={

    isLoggedIn : boolean, 
    user : IPatient | null
    updateContext :( isLoggedIn : boolean , user : IPatient | null) => void 

}

class Login extends React.Component<{},LoginState> {

    constructor(props : any) {
        super(props);
        this.state ={
            isLoggedIn : false, 
            user: null,
            updateContext : this.updateUser
        }
    }

    updateUser = ( isLoggedIn : boolean , user : IPatient | null) => {
        
        if(this.state.isLoggedIn){
            
            if(user){
                putUser(user).then( response => {
            
                    const dataUser = (response.data as unknown ) as IPatient;
                    
                    const userPatient : IPatient =  {
                        id : dataUser.id as number, 
                        firstName : dataUser.firstName as string,
                        lastName : dataUser.lastName as string,
                        userPassword : " ",
                        birthDate : dataUser.birthDate,
                        insuranceName : dataUser.insuranceName as string,
                        location : dataUser.location as string,
                        appointsments : dataUser.appointsments,
                        email : dataUser.email,
                        phoneNumber : dataUser.phoneNumber,
                        sicknesses : dataUser.sicknesses,
                        wellnessPlan : []
                        
                    } 
                    this.setState( {user : userPatient});
                } );    
            }
            
        }
        this.setState({isLoggedIn : isLoggedIn , user : user});
    }

    render(){

        return (
            <MyContext.Provider value = {this.state}>
                {this.state.isLoggedIn ?  <App />: <LoginForm updateContext={this.state.updateContext}  /> }

            </MyContext.Provider>
        )
    }

}




export default Login;