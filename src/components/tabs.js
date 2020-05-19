import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, withRouter } from 'react-router-dom';
import Table from '../tables/table';
import Addmed from './addmed'
import Form from './form'
import { createMuiTheme } from '@material-ui/core/styles';
import '../App.css';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({



  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs(props) {

  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.admin)
  const[min]=React.useState(props.admin);
  console.log("osamaaaaa",props.admin)
  
  
  // if(min==""||min==undefined||min==null){
  //   window.location.replace('/')
  // }
  //  if(props.location.query == "" || props.location.query == undefined || props.location.query == null){
  //   return (
  //     <div><h1>404</h1></div>
  //     )   
  // }
  return (
    <div className={classes.root} >
      <AppBar className="appbar" position="dynamic" style={{ backgroundColor: '#4cbdb9' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Med" {...a11yProps(0)} />
          <Tab label="Request An Invoice" {...a11yProps(1)} />
          <Tab label="OutStandings" {...a11yProps(2)} />
          {min &&<Tab label="Check Invoices" {...a11yProps(3)} />}
          <Tab label="Add Stock" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <div style={{ textAlign: 'center' }}>
        <h1>{props.admin}</h1>
          <b >Mediciene details</b>
        </div>
        <br />
        <br />
        <hr />
        <Table />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ textAlign: 'center' }}>
          <b>
            Please fill all the Details
        </b>
        </div>

        <br />
        <br />
        <hr />
        <Form />
      </TabPanel>
      
      <TabPanel value={value} index={2}>
     OutStandings
    </TabPanel>

  {min &&
  <TabPanel value={value} index={3}>
    Generate
  </TabPanel>}
  <TabPanel value={value} index={4}>
    Enter Details
        <br />
        <br />
        <hr />
        <Addmed/>
  </TabPanel>
  
      
      
    </div>
  );
}
export default withRouter(SimpleTabs);