import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import {Container,Button,Form,Card,Navbar} from 'react-bootstrap';
import '../App.css'
import logo from '../images/flickk.jpg'
import { Link,withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import SimpleTabs from './tabs';

 class login extends Component {
    state={
        email:'',
        password:'',
        view:true
    }
 componentDidMount(){
  
  const{view}=this.state;
  if(view===false){
    window.location.replace('./four0four')
  }
 }
 handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
 onclick=()=>{

    const {email,password,view}=this.state
    console.log(email,password)
    if(email===''|| password===''){
        
            Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Something went wrong!'
           })
           
    }
    
    else{
      Swal.fire({
        icon: 'success',
        title: 'Welcome...',
        text: 'Something went wrong!'
      })

      this.setState({
        view:false
      })
     
       
    }

 }

    render() {
      const{view}=this.state;
      console.log(view)
      
        return (

          <React.Fragment>
          
          <Container style={{maxWidth:'700px'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{maxWidth:'700px'}}>
                <Card className="log" >
              <Card.Body className="head" ><h1> <b>LOGIN</b></h1></Card.Body>
              <Card.Body style={{alignItems:'center' }}>
                <Form>
                  
                  <Form.Group className="login" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange ={this.handleInput} name="email" type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group  className="login" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange ={this.handleInput} name="password"  type="password" placeholder="Password" />
              </Form.Group>
              <br/>
              <Button className="login" 
              style={{backgroundColor:'#0e716e'}} onClick ={this.onclick} >
                LogIn
            </Button>
            <br/>
            <br/>
           </Form>         
              </Card.Body>
            </Card>
     
                </div>
            
          </Container>
          
          
            
          {/* <SimpleTabs></SimpleTabs> */}

          </React.Fragment>
         
          
      )
      
      
     
    
         
    }
}
export default withRouter(login);