import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';

 class footer extends Component {
    render() {
        return (
            // ,backgroundImage:`url(${logo})`
            <React.Fragment>
                
            <Navbar className="Nav" bg="grey" style={{position:'dynamic',maxHeight:'600px'}} >
<Navbar.Brand className="label1">
  <label className="label1" > footer </label> 
</Navbar.Brand>
</Navbar>
        </React.Fragment>
        )
    }
}
export default footer;