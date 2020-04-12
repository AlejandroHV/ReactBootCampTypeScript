import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { healAppReducer } from './Reducer/patientReducer';
import store from './Stores/store';
import { addUser } from './Actions/actionsCreators';
import { patientsData } from './Objects/patientsData';
import PatientInfo  from './Components/patientInfo';
import {PatientSickness} from './Components/patientSickness';
import { Container, AppBar, Toolbar, Typography, MenuItem, Menu, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WellnessPlansList from './Components/wellnessPlansList';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.grey.A100,
    padding: theme.spacing(8, 0, 6),
    border: 1,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(store.getState());
store.dispatch(addUser(patientsData[0]));


const  App =() : JSX.Element => {
  const classes = useStyles();
  return (
    <Provider store= {store}>
      <Router>
      <CssBaseline />
        <AppBar position="static"  elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap  className={classes.toolbarTitle}>
                Health App
              </Typography>  
             
              <nav>
                <Button variant="contained" color="secondary">  <Link  to="/" className={classes.link}>Profile</Link></Button>
                <Button variant="contained" color="secondary">  <Link to="/WellnessPlans" className={classes.link}>Wellness Plans</Link></Button>
                
              </nav>
            </Toolbar> 
        </AppBar>
        <Container className={classes.heroContent}>
          <Switch>
            <Route  exact path="/">
              <PatientInfo />
                </Route>
              <Route path="/WellnessPlans">
                <WellnessPlansList/>
              </Route>
              
          </Switch>
        </Container>
      </Router>
    </Provider>
    
  );
}

export default App;
