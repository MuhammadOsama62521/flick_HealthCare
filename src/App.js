
import React, { Component } from 'react'
import Login from '../src/components/login';
import SimpleTabs from '../src/components/tabs';
import Four from '../src/components/four0four';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Image from '../src/components/image'
import {Container} from 'react-bootstrap';

import Nav from '../src/components/Nav'
import Carousel from '../src/components/carousel'
import Invoice from './components/invoice'
import Out from './components/outstandings'

class App extends Component{

  render(){
    return(
      <BrowserRouter>
      <React.Fragment  >
      
      <Nav/> 
      
      <Image/>
      <Switch>
      <Route path='/invoice' exact component={Invoice}/>
      <div className="main">

          <Container >
            
          <Route path='/' exact component={Carousel}/> 
          
          {
          localStorage.getItem('Token') 
          ?
          <Route path='/tabs' exact component={SimpleTabs}/> 
          :
          <Route path='/login' exact component={Login}/>
          }
          </Container>
         
          
      </div>
      
      </Switch>
</React.Fragment>
      </BrowserRouter>
      //fourofour
    )
  }  
}
export default App;
