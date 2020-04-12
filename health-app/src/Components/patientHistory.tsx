import React from 'react';
import { IHealtState } from '../Interfaces/IHealtState';
import { IPatient } from '../Interfaces/IPatient';
import { IAppointment } from '../Interfaces/IAppointment';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button, Container } from '@material-ui/core';



type IPatientHistoryProps = {
    appointments? : IAppointment[],
    patientName? : string
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 500,
      display: 'inline-block',  
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


 export const PatientHistory  = ({appointments, patientName} : IPatientHistoryProps) :JSX.Element => {
    const classes = useStyles();
    return(
        <div>
        
            <Typography variant="h6" color="inherit" noWrap>
                This is your medical history of the last year: 
            </Typography>
            <Container>
                {appointments?.map( a => 
                    <Card variant='outlined' className={classes.root} >
                    <CardContent>
                        <Typography  className={classes.title} color="textSecondary" gutterBottom>
                            Appointment :  { new Date(a.ocurredDate).toLocaleDateString()}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Diagnostic : {a.diagnostic}
                        </Typography>
                        <Typography  color="textSecondary">
                        Appointment with  {a.doctorName}
                        </Typography>
                        <Typography variant="body2" component="div">
                            <b>Medicine assigned</b> <br />
                                {a.medicines}
                            
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




