import React, { } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router-dom';
import Table from '../tables/table';
import Addmed from './addmed'
import Form from './form'

import '../App.css';

import Out from './outstandings'
import Sale from './sales'

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
 
  return (
    <div className={classes.root} >
      <AppBar className="appbar" position="dynamic" style={{ backgroundColor: '#4cbdb9' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="CHECK MEDICINE" {...a11yProps(0)} />
          <Tab label="REQUEST AN INVOICE" {...a11yProps(1)} />
          <Tab label="OUTSTANDINGS" {...a11yProps(2)} />
          <Tab label="MY SALES" {...a11yProps(3)} />
          <Tab label="UPDATE" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <div style={{ textAlign: 'center' }}>
          <b >SEARCH MEDICINE</b>
        </div>
        <br />
        <br />
        <hr />
        <Table />
      </TabPanel>


      {
        localStorage.getItem('type')==='admin'
        &&
        <TabPanel value={value} index={1}>
        <div style={{ textAlign: 'center' }}>
          <b>
            PLEASE FILL ALL THE DETAILS
        </b>
        </div>
        <br />
        <br />
        <hr />
        <Form />
      </TabPanel>

      }
      
      {
        localStorage.getItem('type')==='user'
&&
<TabPanel value={value} index={2}>
     <div style={{textAlign:'center'}}>
    <b>
    OUTSTANDINGS
    </b> 
       </div>
       <br/>
    <br/>
    <hr />
       <Out/>
    </TabPanel>
      }
      
  {
    localStorage.getItem('type')==='user'
    &&
<TabPanel value={value} index={3}>
    <div style={{textAlign:'center'}}>
      <b>
      TOTAL SALES
      </b>
    </div>
    <br/>
    <br/>
    <hr />
    <Sale/>
  </TabPanel>
  }
  
  {
    localStorage.getItem('type')==='admin'
    &&
    <TabPanel value={value} index={4}>
      <div style={{textAlign:'center'}}>
      ENTER DETAILS
      </div>
   
        <br />
        <br />
        <hr />
        <Addmed/>
  </TabPanel>
  }
  
  
      
      
    </div>
  );
}
export default withRouter(SimpleTabs);