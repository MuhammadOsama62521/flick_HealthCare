import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';
import SimpleTabs from './tabs';
import { Link,withRouter } from 'react-router-dom';
 class footer extends Component {
state={
  admiin:''
}

   componentDidMount(){
const {admin} = this.props;
this.setState({
  admiin:admin
})
console.log(this.state.admiin)
   }
   
    render() {
        return (
           
            <React.Fragment>
                <SimpleTabs/>
    
        </React.Fragment>
        )
    }
}
export default withRouter(footer);