import React from 'react';
import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import { IPatient } from '../Interfaces/IPatient';
import { IHealtState } from '../Interfaces/IHealtState';
import { updateUserAction, updateUser } from '../Actions/actionsCreators';
import {Box, Typography, TextField, Button } from '@material-ui/core';
import { PatientHistory } from './patientHistory';
import { PatientSickness } from './patientSickness';
import { MyContext } from '../AuthContext/AuthContext';


type IPatientInfoProps = {
    patient : IPatient,
    updatePatient : (patient: IPatient) => void
}

type IPatientInfoState  ={
    isEditMode: boolean,
    birthDate : Date,
    insuranceName : string, 
    phoneNumber : string, 
    email : string ,
    location : string,
    isUserLoggedIn : boolean,
    loggedUser : IPatient | null,
    updateContext :( isLoggedIn : boolean , user : IPatient | null) => void 
}

class PatientInfo extends React.Component<IPatientInfoProps,IPatientInfoState> {
    
    
    constructor(props : IPatientInfoProps){
        super(props);
        this.state = {
            isEditMode: false,
            birthDate : this.props.patient?.birthDate,
            insuranceName : this.props.patient?.insuranceName, 
            phoneNumber : this.props.patient?.phoneNumber, 
            email : this.props.patient?.email,
            location : this.props.patient?.location,
            isUserLoggedIn :  false,
            loggedUser : null, 
            updateContext : ( isLoggedIn  , user ) => {}
        }

    }

    componentWillMount =()=>{
        const {isLoggedIn , user, updateContext} = this.context;
        this.setState({isUserLoggedIn : isLoggedIn,loggedUser : user, updateContext : updateContext });
    }

    componentDidMount =() => {
       
        

    }

    changeEditMode = () => {

        this.setState({isEditMode : !this.state.isEditMode});
    }


    handleSubmit = ( e: React.FormEvent<HTMLFormElement>)=> {
           
        e.preventDefault();
        
        /*
        const updatedPatient : IPatient = {
            id: this.props.patient.id,
            firstName : this.props.patient.firstName,
            lastName : this.props.patient.lastName,
            appointsments : this.props.patient.appointsments,
            sicknesses : this.props.patient.sicknesses,
            wellnessPlan : this.props.patient?.wellnessPlan,
            birthDate :  this.state.birthDate ,
            email : this.state.email,
            userPassword : "",
            insuranceName : this.state.insuranceName,
            location : this.state.location,
            phoneNumber : this.state.phoneNumber
        }
        
        this.props.updatePatient(updatedPatient);
        */
       this.state.updateContext(true, this.state.loggedUser);
        this.changeEditMode();
    }


    handleBirthChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : Date  =  new Date(target.value);
        const currentUser  = this.state.loggedUser;
        if(currentUser){
            currentUser.birthDate  = value;
        }
        this.setState( {loggedUser:  currentUser} );
    }

    handleInsurranceChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        const currentUser  = this.state.loggedUser;
        if(currentUser){
            currentUser.insuranceName  = value;
        }
        this.setState( {loggedUser:  currentUser} );
       // this.setState( {insuranceName: value} );
    }

    handlePhoneChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        const currentUser  = this.state.loggedUser;
        if(currentUser){
            currentUser.phoneNumber  = value;
        }
        this.setState( {loggedUser:  currentUser} );
        //this.setState( {phoneNumber: value} );
    }

    handleLocationChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        const currentUser  = this.state.loggedUser;
        if(currentUser){
            currentUser.location  = value;
        }
        this.setState( {loggedUser:  currentUser} );
        //this.setState( {location: value} );
    }

    handleEmailChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        const currentUser  = this.state.loggedUser;
        if(currentUser){
            currentUser.email  = value;
        }
        this.setState( {loggedUser:  currentUser} );
        //this.setState( {email: value} );
    }

    render() {
        let contextData = this.context;
        return(
            <div> 
                <Box > 
                    <Typography variant="h2" color="inherit" noWrap>
                        
                        Hello {this.state.loggedUser?.firstName  + ' ' + this.state.loggedUser?.lastName + ','}
                    </Typography> 
                    <Typography variant="h6" color="inherit" noWrap>
                        <h3> This is your personal information: </h3>  
                    </Typography>                           
                    
                    <form onSubmit={this.handleSubmit}>

                        <TextField
                            label="Birth Date"
                            type="date"
                            name="birthDate"
                            variant="outlined"
                            disabled =  {!this.state.isEditMode}
                            defaultValue={this.state.loggedUser?.birthDate}
                            onChange={this.handleBirthChange}
                            InputLabelProps={{
                            shrink: true,
                        }}/>
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name= "insuranceName"
                            label="Insurance Name"
                            onChange={this.handleInsurranceChange}
                            defaultValue={this.state.loggedUser?.insuranceName}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            onChange={this.handlePhoneChange}
                            defaultValue={this.state.loggedUser?.phoneNumber}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name= "location"
                            label="Location"
                            onChange={this.handleLocationChange}
                            defaultValue={this.state.loggedUser?.location}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name="email"
                            label="Email"
                            onChange={this.handleEmailChange}
                            defaultValue={this.state.loggedUser?.email}
                            variant="outlined"
                        />
                    
                        {this.state.isEditMode &&  <Button variant="contained" color="secondary"   type="submit" >Submmit</Button>}
                    </form>
                    {!this.state.isEditMode &&  <Button variant="contained" color="secondary" onClick={this.changeEditMode}> Edit Information</Button>}
                    
                </Box>
                {/* TO DO : MAKE THIS A TAB */}
                <br/>
                <PatientHistory  appointments={ this.state.loggedUser?.appointsments}  patientName ={this.props.patient.firstName}/>
                <br/>
                <PatientSickness sicknessList = {this.state.loggedUser?.sicknesses}/>         
            </div>  
        )
    };


}

PatientInfo.contextType = MyContext;

const mapStateToProps = (state: IHealtState) => {
    return { patient: state.user };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
      updatePatient: (user: IPatient) => dispatch<updateUserAction>(updateUser(user)),
     
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PatientInfo);

