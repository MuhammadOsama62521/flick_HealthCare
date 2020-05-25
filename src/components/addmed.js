import React, { Component } from 'react'
import {Container,Form,Col, Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2';

class Addmed extends Component {

componentDidMount(){
    // axios.get('http://localhost:1337/id',{
        
    //   }).then(res=>{
    //   console.log(res.data);
    // //   this.setState({
    // //     med_id:res.data
    // //   })
      
      
    // })
}


state={
    med_name:'',
    price:'',
    Tprice:'',
    quantity:'',
    pack_size:'',
    mrp:'',
    med_details:{}
}


handleCh = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    

  }
  onClick=()=>{
      const{med_name,price,Tprice,quantity,pack_size,mrp}=this.state;
      let i = mrp * (15 / 100)

      this.setState({
          med_details:{
              med_name:this.state.med_name,
              price:this.state.price,
              Tprice:i,
              quantity:this.state.quantity,
              pack_size:this.state.pack_size,
              mrp:this.state.mrp
          }
      },()=>{
          console.log(this.state.med_details)

          axios.post('http://localhost:1337/add', {
         med_details:this.state.med_details
    }).then(res=>{
        Swal.fire({
            icon: 'success',
            title: "Done",
             text: "Mediciene added Successfully" 
        })
    }).catch(err=>{
        Swal.fire({
            icon: 'error',
            title: "Ops",
             text: "Something went wrong" 
        })
    })
      })
  }


    render() {
        return (
            <React.Fragment>
                <Container>
                <label style={{textAlign:'center',paddingRight:'100px'}}>Enter a new Mediciene</label> 
                <Form>
  <Form.Row>
    
 
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Mediciene Name</Form.Label>
      <Form.Control name="med_name" onChange={this.handleCh} type="text" placeholder="Full Name" />
    </Form.Group>
    </Form.Row>

<Form.Row>
<Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Quantity</Form.Label>
    <Form.Control name="quantity" onChange={this.handleCh} placeholder="0" />
</Form.Group>

<Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Pack Size</Form.Label>
    <Form.Control name="pack_size" onChange={this.handleCh} placeholder="0" />
</Form.Group>
</Form.Row>


<Form.Row>
<Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" onChange={this.handleCh} placeholder="$" />
</Form.Group>
  
  
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>M.R.P</Form.Label>
    <Form.Control name="mrp" onChange={this.handleCh} placeholder="$" />
</Form.Group>



  </Form.Row>
</Form>
<Button onClick={this.onClick}>
    ADD
</Button>
<hr/>
                </Container>
            </React.Fragment>
        )
    }
}

export default Addmed;
