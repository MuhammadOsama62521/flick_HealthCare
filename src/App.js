
import React, { Component } from 'react'
import Login from '../src/components/login';
import Navbar from '../src/components/Navbar';
import SimpleTabs from '../src/components/tabs';
import Four from '../src/components/four0four';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Image from '../src/components/image'
import {Container} from 'react-bootstrap';
import Footer from '../src/components/footer'
import Nav from '../src/components/Nav'
import Carousel from '../src/components/carousel'
import Invoice from './components/invoice'
//http://192.168.1.105:3000
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
      
    )
  }  
}
export default App;
