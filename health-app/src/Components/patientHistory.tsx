import React from 'react';
import { IHealtState } from '../Interfaces/IHealtState';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { IPatient } from '../Interfaces/IPatient';
import { IAppointment } from '../Interfaces/IAppointment';
import { makeStyles, Card, CardContent, Typography, CardActions, Button, Container } from '@material-ui/core';



type IPatientHistoryProps = {
    appointments? : IAppointment[],
    patientName? : string
}

type IPatientHistoryState = {
    name : string
}


class PatientHistory extends React.Component<IPatientHistoryProps,IPatientHistoryState> {
    constructor(props : IPatientHistoryProps){
        super(props);
        this.state = {
            name : ""
        }
    }

    componentDidMount(){

    }
    
    render() {
        
        return(
                <div>
                    <Typography variant="h2" color="inherit" noWrap>
                        Hello {this.props.patientName} ,
                    </Typography>
                    <Typography variant="h6" color="inherit" noWrap>
                        This is your medical history of the last year: 
                    </Typography>
                   <Container>
                        {this.props.appointments?.map( a => 
                            <Card variant='outlined' >
                            <CardContent>
                                <Typography  color="textSecondary" gutterBottom>
                                    Appointment :  {a.ocurredDate.toLocaleDateString()}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Diagnostic : {a.diagnostic}
                                </Typography>
                                <Typography  color="textSecondary">
                                Appointment with  {a.doctorName}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Medicine assigned <br />
                                    <ul>
                                        {a.medicines.map(m => <li key="m"> {m}</li>)}
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions>
                            {/* <Button size="small">Learn More</Button>  */}
                            </CardActions>
                            </Card>
                        )};
                    </Container>
                    
                </div>

        );

    }
}


const mapStateToProps = (state: IHealtState) => {
    return { appointments : state.user.appointsments , patientName : state.user.firstName + ' '+ state.user.lastName };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
      //updatePatient: (user: IPatient) => dispatch<updateUserAction>(updateUser(user)),
     
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PatientHistory);

