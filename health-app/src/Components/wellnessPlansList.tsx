import React from 'react';
import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import { IWellnessPlan } from '../Interfaces/IWellnessPlan';
import { Typography, Box, Container, Card, CardContent, CardActions } from '@material-ui/core';
import { IHealtState } from '../Interfaces/IHealtState';
import { fetchWellnessPlanAction, fetchWellnessPlans } from '../Actions/actionsCreators';
import { getWellnessPlans } from '../Api/healthAPI';


type PlanProps = {
   plans : IWellnessPlan[] 
   obtianWellnessPlans : (wPlans: IWellnessPlan[]) => void
}

class  WellnessPlansList extends React.Component<PlanProps,{} > {

    constructor(props : PlanProps) {
        super(props)
    }

    componentWillMount (){
        getWellnessPlans().then(response => {
            this.props.obtianWellnessPlans(response.data);

        })

    }

    render(){
        
        return( 
            <div>
                
                <Box>
                    <Typography variant="h2" color="inherit" noWrap>
                        
                        Hello 
                    </Typography> 
                    <Container>
                        {this.props.plans?.map( a => 
                            <Card variant='outlined' >
                            <CardContent>
                                <Typography  variant="h3"  color="textSecondary" gutterBottom>
                                    {a.name}
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    {a.description}
                                </Typography>
                                <Typography  color="textSecondary">
                                    Duration  { a.duration}
                                </Typography>
                                <Typography  variant="h6" color="textSecondary">
                                    Activities :   { a.activities}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            {/* <Button size="small">Learn More</Button>  */}
                            </CardActions>
                            </Card>
                        )};

                    </Container>
                </Box>
            </div>
        
            );
    }

}

const mapStateToProps = (state: IHealtState) => {
    return { plans: state.wellnessPlans };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
      obtianWellnessPlans: (plans: IWellnessPlan[]) => dispatch<fetchWellnessPlanAction>(fetchWellnessPlans(plans)),
     
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(WellnessPlansList);

