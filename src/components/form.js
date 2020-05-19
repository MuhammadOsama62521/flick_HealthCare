import React, { Component } from 'react'
import {Container,Form,Button,Col,Row,Modal} from 'react-bootstrap'
import axios from 'axios';
import '../App.css';






class form extends Component {
componentDidMount(){
  axios.get('http://localhost:1337/tabs').then(res=>{
  
    this.setState({
      meddetails:res.data
    })
  })
  
}
state={
  meddetails:[],
  show:false,
  med:'',
  cname:'',
  address:'',
  number:'',
  rname:'',
  details:{}
}
handleShow=()=>{
this.setState({
  show:true
})
}
handleClose=()=>{
  this.setState({
    show:false
  })
}
handleCh=(e)=>{
  //const{cname,address,number,rname}=this.State
  this.setState({
    [e.target.name]:e.target.value
})
console.log(this.state.rname)
 // console.log(cname,address,number,rname);
}
onclick=()=>{
const{details}=this.state
 this.setState({
   details:{
     name:this.state.cname,
     address:this.state.address,
     contact:this.state.number,
     person:this.state.rname,
   }
 },()=>{
  console.log(this.state.details)
 })
 
}






    render() {
      const{meddetails,show}=this.state;
        return (
            <React.Fragment>
                <Container>
                <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Select</Form.Label>
    <Form.Control name="med"
     as="select" 
     value="Choose..." 
     onChange={this.handleCh}
     placeholder="select">
     
        {meddetails.map((v,i)=>{
          return(
         <option key={i}>{v.medname}</option>
          )
        })}
        </Form.Control>
        
      
    </Form.Group>
  </Form.Row>
  <hr/>
  <Button variant="primary" onClick={this.handleShow}>
    check Out
  </Button>
</Form>

<Modal className="Modal" style={{marginTop:"50px"}} show={this.state.show} onHide={this.handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Please Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name of Client</Form.Label>
      <Form.Control name="cname" onChange={this.handleCh} type="text" placeholder="Store" />
    </Form.Group>

  
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control name="address" onChange={this.handleCh} placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control name="number" onChange={this.handleCh} placeholder="03XXXXXXXXX" />
  </Form.Group>
  
  <Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Contacted person</Form.Label>
    <Form.Control name="rname" onChange={this.handleCh}  />
  </Form.Group>
  </Form.Row>
</Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.onclick}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>






                </Container>
            </React.Fragment>
        )
    }
}

export default  form;