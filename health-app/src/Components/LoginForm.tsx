import React from 'react';
import { IPatient } from '../Interfaces/IPatient';
import { login } from '../Api/healthAPI';
import { AppBar, Typography, Toolbar, Container, TextField, Button } from '@material-ui/core';
import { patientsData } from '../Objects/patientsData';


type FormProps = {
    updateContext : ( isLoggedIn : boolean , user : IPatient | null) => void 

}

type FormState = {
    email : string, 
    password : string,
}

class LoginForm extends React.Component<FormProps,FormState> {

    constructor(props : FormProps)
    {
        super(props);
        this.state = {
            email: "",
            password : "",
        }
    }

    handleSubmit = ( e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        login(this.state.email, this.state.password).then( response => {
            
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
            this.props.updateContext(true,userPatient);
        } );

        //
    }

    handleOnChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const target = e.target;
        const name : string = target.name;
        const value : string  =  target.value;
        this.setState( {[name]: value} as any);
    }

    render(){
        return(
            <div>
                 <AppBar position="static"  elevation={0} >
                    <Toolbar >
                        <Typography variant="h6" color="inherit" noWrap  >
                            Health App
                        </Typography>  
                        
                        
                     </Toolbar> 
                </AppBar>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                                        
                                        name= "email"
                                        label="Email"
                                        onChange={this.handleOnChange}
                                        defaultValue=""
                                        variant="outlined"
                                    />
                        <TextField
                                        
                                        name= "password"
                                        label="Password"
                                        onChange={this.handleOnChange}
                                        defaultValue=""
                                        variant="outlined"
                                    />
                        <Button type="submit" variant="contained"> Submit </Button>
                    </form>
                </Container>
                
            </div>

            
        );

    }
   
}

export default LoginForm;