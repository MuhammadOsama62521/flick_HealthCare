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
import Table from '../tables/table'

// const api =Axios.create({
//   baseUrl:`http://localhost:1337/`
// })

class login extends Component {

  // constructor(){
  //   super();
  //   api.get('http://localhost:1337/').then(res=>{
  //     console.log(res.data)

  //   })
  // }


  state = {
    email: '',
    password: '',
    view: true,
    admin:false,
    details:[]
  }
  componentDidMount() {


axios.get('http://localhost:1337/').then(res=>{
  
  this.setState({
    details:res.data
  })
  console.log(this.state.details);

})
axios.post('http://localhost:1337/createmeddata',{
  email:'osama'
}).then(res=>{
  console.log(res);
})
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  onclick = () => {
    
    const { email, password, view,details} = this.state
    console.log(email, password,details)
    
    details.map((v,i)=>{
      console.log('osama',v.name)
      if (email === v.email || password === v.password) {

        Swal.fire({
          icon: 'success',
          title: 'Welcome...',
          // text: 'Something went wrong!'
        }).then(()=>{
          window.location.replace('/tabs');
          
        })
        
  
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill the Details'
        })
        
  //userstate
        this.setState({
          view: false
        })
      }
    })
    

    
  }

  render() {
    const { view,admin } = this.state;

    console.log(admin)

    return (

      <React.Fragment>

{false && <SimpleTabs admin="admin212"/>}
{false && <Table admin="admin212"/>}
        <Container style={{ maxWidth: '700px' }}>
          <br />
          <br />
        
          <div style={{ maxWidth: '700px' }}>
            <Card className="log" >
              <Card.Body className="head" ><h1> <b>LOGIN</b></h1></Card.Body>
              <Card.Body style={{ alignItems: 'center' }}>
                <Form>

                  <Form.Group className="login" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.handleInput} name="email" type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="login" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.handleInput} name="password" type="password" placeholder="Password" />
                  </Form.Group>
                  <br />
                  <Button className="login"
                    style={{ backgroundColor: '#0e716e' }} onClick={this.onclick} >
                    Login
            </Button>
                  <br />
                  <br />
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