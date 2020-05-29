import React, { Component } from 'react'
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
class NavB extends Component {


onClick=()=>{
  Swal.fire({
    icon: 'success',
    title: 'Logged Out',
    
  }).then(()=>{
    localStorage.removeItem('Token')
    window.location.replace('/')
  })
}

    render() {
        return (
        <React.Fragment>
            <Navbar className="mainNav" bg="grey" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">
          <Link to="/" style={{textDecoration:'none',color:"black"}}>
          Home
          </Link>
          
          </Nav.Link>
      <Nav.Link href="#weare" style={{color:"black"}}>Who we are?</Nav.Link>
      <Nav.Link href="#ourteam" style={{color:"black"}} >Our Team</Nav.Link>
    </Nav>
    <Form inline>
      {
        ! localStorage.getItem('Token')
        ?
<Button variant="outline-primary" style={{marginRight:'5px'}}>
        <Link to='/login'>
        Login
        </Link>
          
      </Button>
      :
<Button variant="outline-primary" onClick={this.onClick}>LogOut</Button>
      }
      
      
      
      
      
    </Form>
  </Navbar>
        </React.Fragment>
        )
    }
}

export default NavB;
