import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { Container, Button, Form, Card, Navbar } from 'react-bootstrap';
import '../App.css'
import logo from '../images/flickk.jpg'
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import SimpleTabs from './tabs';
import axios from 'axios';


class login extends Component {
  state = {
    email: '',
    password: '',
    view: true,
    adminn: false,
    details: [],
    renderTabs: false,
    renderLogin: true,
    redirect : false,
    name:'',
  }
  componentDidMount() {
  // var tk= localStorage.getItem('Token');
  //  console.log("osama",tk)

    // if(localStorage.getItem('Token')!==null ||localStorage.getItem('Token')!==undefined|| localStorage.getItem('Token')!== ''){
    //   this.setState({
    //     renderLogin: false,
    //     renderTabs: true,
    //   })

    // }
   
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onclick = () => {

    const { email, password, view, details } = this.state
    console.log(email, password)

    
if(email!='' && password!=''){
  axios.post('http://localhost:1337/userd', {
      email: email,
      password:password
    })
    .then(res => {
      console.log("dos",res)
      localStorage.setItem('Token', res.data.Auth ) ;
      this.setState({
        name:res.data.rows[0].name,
        renderTabs: true,
      renderLogin: false,
      redirect:true,
      adminn:true
      })

      console.log(this.state.name)
    }).then(()=>{
      Swal.fire({
              icon: 'success',
              title: 'Welcome...',
              text: this.state.name
            }).then(()=>{
              window.location.replace('/tabs')
            })
    }).catch(err=>{
      
      //console.log("error=>" , err.response.data.err)
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
// change=()=>{
  
// }
  //sending props
  // Redirect = () =>
  // {console.log("ok")
  //   if(this.state.redirect){
  //     this.props.history.push({
  //       pathname: '/tabs',
  //       query: {
  //         email: "Hello From Adimn",
  //       }
  //     })
  //   }
    
  // }

  
  render() {
    const { view, adminn, renderLogin } = this.state;

  


    console.log(adminn)
    

    return (

      <React.Fragment>
{/* {this.Redirect()} */}
      
        {/* {this.state.renderTabs && <SimpleTabs admin ={this.state.adminn}/>} */}

         {/* // {renderLogin  && */}
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
                      style={{ backgroundColor: '#0e716e' }}
                      onClick={this.onclick} >
                      Login
              </Button>
                    <br />
                    <br />
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Container>
      </React.Fragment>
    )
  }
}
export default withRouter(login);