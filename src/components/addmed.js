import React, { Component } from 'react'
import {Container,Form,Col } from 'react-bootstrap'
export class Addmed extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Mediciene Name</Form.Label>
      <Form.Control name="cname" onChange={this.handleInput} type="text" placeholder="Full Name" />
    </Form.Group>
    </Form.Row>
<Form.Group controlId="formGridAddress1">
    <Form.Label>uantity</Form.Label>
    <Form.Control name="address" onChange={this.handletext} placeholder="1234 Main St" />
</Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control name="number" onChange={this.handlenumber} placeholder="03XXXXXXXXX" />
  </Form.Group>
  
  <Form.Row>
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>City</Form.Label>
      <Form.Control name="city" onChange={this.handlecity} as="select">
        <option>Choose...</option>
        <option>Karachi</option>
        <option>Islamabad</option>
        <option>Lahore</option>
        <option>Larkana</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
</Form>
                </Container>
            </React.Fragment>
        )
    }
}

export default Addmed;
