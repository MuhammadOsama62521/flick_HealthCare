import React, { Component } from 'react';
import {Navbar,Col,Row} from 'react-bootstrap';
import '../App.css'
import logo from '../images/flick.jpg'

class Navvbar extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Navbar className="Nav" >
    <Navbar.Brand className="label1">
      {/* <label className="label1" style={{color:"white"}}> Flick Health Care </label>  */}
    </Navbar.Brand>
  </Navbar>
            </React.Fragment>
        )
    }
}
export default Navvbar;