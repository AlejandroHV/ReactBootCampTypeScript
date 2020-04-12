import { Box, Typography, Card, CardContent, CardActions, Container } from "@material-ui/core";
import React from "react";
import { ISickness } from "../Interfaces/ISickness";
import { makeStyles } from '@material-ui/core/styles';


type PatientSicknessProps = {
    sicknessList : ISickness[] | undefined,

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



export const PatientSickness = ( {sicknessList} : PatientSicknessProps) : JSX.Element => {
    const classes = useStyles();
    return ( 
        <div>
           <Typography variant="h6" color="inherit" noWrap>
                These are the sickness the patient has:  
            </Typography>
            <Container>
                {sicknessList?.map( a => 
                    <Card variant='outlined' className={classes.root} >
                    <CardContent>
                        <Typography  variant="h3"  color="textSecondary" gutterBottom>
                              {a.name}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {a.description}
                        </Typography>
                        <Typography  color="textSecondary">
                            Start Date  {new Date(a.startedDate).toLocaleDateString()}
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

