import React from 'react';
import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import { IPatient } from '../Interfaces/IPatient';
import { IHealtState } from '../Interfaces/IHealtState';
import { updateUserAction, updateUser } from '../Actions/actionsCreators';
import {Box, Typography, TextField, Button } from '@material-ui/core';



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
        }

    }


    changeEditMode = () => {

        this.setState({isEditMode : !this.state.isEditMode});
    }


    handleSubmit = ( e: React.FormEvent<HTMLFormElement>)=> {
           
        e.preventDefault();

        const updatedPatient : IPatient = {
            id: this.props.patient.id,
            firstName : this.props.patient.firstName,
            lastName : this.props.patient.lastName,
            appointsments : this.props.patient.appointsments,
            sickness : this.props.patient.sickness,
            wellnessPlan : this.props.patient?.wellnessPlan,
            birthDate :  this.state.birthDate ,
            email : this.state.email,
            insuranceName : this.state.insuranceName,
            location : this.state.location,
            phoneNumber : this.state.phoneNumber
        }
        
        this.props.updatePatient(updatedPatient);
        this.changeEditMode();
    }


    handleBirthChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : Date  =  new Date(target.value);
        this.setState( {birthDate: value} );
    }

    handleInsurranceChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        
        this.setState( {insuranceName: value} );
    }

    handlePhoneChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        
        this.setState( {phoneNumber: value} );
    }

    handleLocationChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        
        this.setState( {location: value} );
    }

    handleEmailChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>{
        const target = e.target;
        const value : string  =  target.value;
        
        this.setState( {email: value} );
    }

    render() {

        return(
            <div> 
                <Box > 
                    <Typography variant="h2" color="inherit" noWrap>
                        Hello {this.props.patient?.firstName  + ' ' + this.props.patient?.lastName + ','}
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
                            defaultValue={this.props.patient?.birthDate}
                            onChange={this.handleBirthChange}
                            InputLabelProps={{
                            shrink: true,
                        }}/>
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name= "insuranceName"
                            label="Insurance Name"
                            onChange={this.handleInsurranceChange}
                            defaultValue={this.props.patient?.insuranceName}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            onChange={this.handlePhoneChange}
                            defaultValue={this.props.patient?.phoneNumber}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name= "location"
                            label="Location"
                            onChange={this.handleLocationChange}
                            defaultValue={this.props.patient?.location}
                            variant="outlined"
                        />
                         <TextField
                            disabled =  {!this.state.isEditMode}
                            name="email"
                            label="Email"
                            onChange={this.handleEmailChange}
                            defaultValue={this.props.patient?.email}
                            variant="outlined"
                        />
                    
                        {this.state.isEditMode &&  <Button variant="contained" color="secondary"   type="submit" >Submmit</Button>}
                    </form>
                    {!this.state.isEditMode &&  <Button variant="contained" color="secondary" onClick={this.changeEditMode}> Edit Information</Button>}
                    
                </Box>
                
               
            </div>  
        )
    };


}

const mapStateToProps = (state: IHealtState) => {
    return { patient: state.user };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
      updatePatient: (user: IPatient) => dispatch<updateUserAction>(updateUser(user)),
     
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PatientInfo);

