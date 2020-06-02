import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { Container, Button, Form,Card} from 'react-bootstrap';
import '../App.css'

import {withRouter } from 'react-router-dom';


import axios from 'axios';


class login extends Component {
  state = {
    email: '',
    password: '',
    name:'',
  }
  

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onclick = () => {

    const { email, password} = this.state

    
if(email!=='' && password!==''){
  axios.post('http://localhost:1337/userd', {
      email: email,
      password:password
    })
    .then(res => {
      localStorage.setItem('Token', res.data.Auth );
      localStorage.setItem('name',res.data.name)
      localStorage.setItem('type',res.data.type)
      this.setState({
        name:res.data.name,
      })
    }).then(()=>{
      Swal.fire({
              icon: 'success',
              title: 'Welcome...',
              text: this.state.name
            }).then(()=>{
              
              window.location.replace('/tabs')
            })
    }).catch(err=>{
      Swal.fire({
        icon: 'error',
        title: "Ops",
         text: "Something went wrong"
      })
    })

   
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Ops...',
     text: "please fill in the details"
  })
}
}

  
  render() {

    return (

      <React.Fragment>

           <Container style={{ maxWidth: '700px' }}>
            <br />
            <br />

            <div style={{ maxWidth: '700px' }}>
              <Card className="log">
                <Card.Body 
                className="head" >
                  <h1> 
                    <b>LOGIN</b>
                    </h1>
                    </Card.Body>
                <Card.Body 
                style={{ alignItems: 'center' }}>
                  <Form>
                    <Form.Group 
                    className="login" 
                    controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                      onChange={this.handleInput} 
                      name="email"
                      type="email" 
                      placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group
                    className="login" 
                    controlId="formBasicPassword">
                      <Form.Label>
                        Password
                        </Form.Label>
                      <Form.Control
                      onChange={this.handleInput} 
                      name="password" 
                      type="password" 
                      placeholder="Password" />
                    </Form.Group>
                    <br />
                    <Button className="login"
                      style={{ backgroundColor: '#0e716e',border:'none',color:'white'}}
                      onClick={this.onclick} >
                      Login
              </Button>
                    <br />
                    <br />
                  </Form>
                </Card.Body>
              </Card>
            </div>
            <br/>
            <br/>
            
          </Container>
      </React.Fragment>
    )
  }
}
export default withRouter(login);