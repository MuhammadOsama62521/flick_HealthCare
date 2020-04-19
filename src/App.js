
import React, { Component } from 'react'
import Login from '../src/components/login';
import Navbar from '../src/components/Navbar';
import SimpleTabs from '../src/components/tabs';
import Four from '../src/components/four0four';
import './App.css';
 import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Container} from 'react-bootstrap';

//http://192.168.1.105:3000
class App extends Component{

  render(){
    return(
      <BrowserRouter>
      <React.Fragment>
        <Navbar/>
        <Container className="main" >
        <Login/>
          <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='*' exact component={Four}/>
          {/* <Route path='/tabs' exact component={SimpleTabs}/> */}
          </Switch>
      </Container>
      <br/>
       
</React.Fragment>
      </BrowserRouter>
      
    )
  }  
}
export default App;
