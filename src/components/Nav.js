import React, { Component } from 'react'
import {Nav,Navbar,Form,Button} from 'react-bootstrap'
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
   
    <Nav className="mr-auto">
      <Nav.Link href="#home">
          <Link to="/" style={{textDecoration:'none',color:"black",fontFamily:'poppins'}}>
          HOME
          </Link>
          
          </Nav.Link>
      <Nav.Link href="#weare" style={{color:"black",fontFamily:'poppins'}}>WHO WE ARE?</Nav.Link>
      <Nav.Link href="#ourteam" style={{color:"black",fontFamily:'poppins'}} >CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
      {
        ! localStorage.getItem('Token')
        ?
<Button variant="outline-primary" style={{marginRight:'5px',border:'none',textDecoration:'none',color:'white',fontFamily:'poppins'}}>
        <Link to='/login'>
        Login
        </Link>
          
      </Button>
      :
<Button variant="outline-primary" onClick={this.onClick} style={{border:'none',textDecoration:'white',fontFamily:'poppins'}}>LogOut</Button>
      }

    </Form>
  </Navbar>
        </React.Fragment>
        )
    }
}

export default NavB;
