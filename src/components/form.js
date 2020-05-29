import React, { Component } from 'react'
import { Container, Form, Button, Col, Row, Modal, Table, thead, tr, tbody } from 'react-bootstrap'
import axios from 'axios';
import '../App.css';
import moment from 'moment'
import swal from 'sweetalert2'




class form extends Component {
  componentDidMount() {
    axios.get('http://localhost:1337/tabs',{
      headers:{
        Authorization: 'Bearer ' +localStorage.getItem('Token')
      }
    }).then(res => {
      console.log(res.data)
      this.setState({
        meddetails:res.data
      })
    })

  }
  state = {
    meddetails: [],
    show: false,
    table: false,
    med: '',
    cname: '',
    sname:'',
    address: '',
    number: '',
    rname: '',
    quantity: '',
    Tprice: '',
    discount: '',
    details: {},
    selection: [],
    date:''
  }
  handleShow = () => {
    const { med, discount, quantity,meddetails,Tprice,sname } = this.state;
    
    if (
      med !== ''
      && sname!==''
      && quantity != ''
      && discount != ''
    ) {
      this.setState({
        show: true
      })
      
    }
    else {
      swal.fire({
        icon: 'warning',
        title: "Ops",
        confirmButtonColor: '#3085d6',
        text: "Please fill all the details"
      })
    }


  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  handleCh = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    

  }
 
  addItems = () => {
    const { selection, med, discount, quantity, price, selected,sname,meddetails,Tprice,date } = this.state;
   this.setState({
     date:moment().format("DD/MM/YYYY")
   }
   )
   
    if (
      med !== "Choose..."
      && quantity != ''
      && discount != ''
      && sname!==''
    ) {
      
      if(isNaN(quantity) || isNaN(discount)){
        window.alert("invaid input")
                    }
                    else{
                      meddetails.map((v,i)=>{
    
                        if(med==v.med_name){
                          this.setState({
                            Tprice:v.Tprice
                          }
                          ,()=>{
                            
                            this.setState({
                
                              selection: [...this.state.selection, {
                                medname: this.state.med,
                                quantity: this.state.quantity,
                                discount: this.state.discount,
                                tprice: this.state.Tprice,
                                
                              }]
                              
                            }, () => {
                              
                              console.log(this.state.selection)
                            })
                          })
                        }  
                       })
                    }
      
      
    }
    else {
      swal.fire({
        icon: 'warning',
        title: "Ops",
        confirmButtonColor: '#3085d6',
        text: "Please Complete The Form"
      })
    }

  }
  Remove = (i) => {
    
    let tempArray = this.state.selection;
    tempArray.splice(i, 1);
    this.setState({
      selection: tempArray,
    });
  }
  onclick = () => {
    const { details, discount,selection,Tprice,meddetails,number } = this.state
    if (
      this.state.cname != ''
      && this.state.address != ''
      && this.state.number != ''
      && this.state.rname != ''
      && this.state.discount != ''
      && this.state.quantity != ''
    ) {
      if(isNaN(number)){
        window.alert("invalid input in contact field")
      }
      else{
        this.setState({
          details: {
            name: this.state.cname,
            address: this.state.address,
            contact: this.state.number,
            person: this.state.rname,
            sname:this.state.sname,
            date:this.state.date,
            selection:this.state.selection
          }
        }, () => {
          swal.fire({
            icon: 'success',
            title: "Success",
            text: "Order placed"
          })
          
          axios.post('http://localhost:1337/invo',{
            details:this.state.details
          })
          
        })
      }

      
    }
    else {
      swal.fire({
        icon: 'warning',
        title: "Ops",
        confirmButtonColor: '#3085d6',
        text: "Please fill all the details"
      })
    }
  }

  render() {
    const { meddetails, show, selection } = this.state;
    
    return (
      <React.Fragment>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col}
                controlId="formGridState">
                <Form.Label>
                  Select Mediciene
      </Form.Label>

                <Form.Control name="med"
                  as="select"
                  onChange={this.handleCh}
                  placeholder="select">

                  <option>Choose..</option>
                  {meddetails.map((v, i) => {
                    return (
                      
                      <option key={i}>{v.med_name}</option>
                    )
                  })}

                </Form.Control>

                <br />

                <Form.Row>
                  <Form.Group as={Col}
                    controlId="formGridEmail">
                    <Form.Label>
                      Quantity
        </Form.Label>
                    <Form.Control
                      name="quantity"
                      onChange={this.handleCh}
                      type="text" placeholder="0"
                    />
                  </Form.Group>

                  <Form.Group as={Col}
                    controlId="formGridEmail">
                    <Form.Label>
                      SalesMan
        </Form.Label>
        <Form.Control name="sname"
                  as="select"
                  onChange={this.handleCh}
                  placeholder="select">

                  <option>Choose..</option>
                      <option >Azb</option>
                      <option >Ali</option>
                      <option >Hunain</option>
                      <option >Adnan</option>
                    

                </Form.Control>

                  </Form.Group>

                  <br />

                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}
                    controlId="formGridEmail">
                    <Form.Label>
                      Discount
        </Form.Label>
                    <Form.Control
                      name="discount"
                      onChange={this.handleCh}
                      type="text"
                      placeholder="%" />
                  </Form.Group>

                </Form.Row>

              </Form.Group>
            </Form.Row>
            <Button onClick={this.addItems}>
              ADD
  </Button>
            <hr />
            <br />
            <Form.Label>
              Selected Items
        </Form.Label>
            <Table striped bordered hover>

              <thead>
                <tr style={{ width: '10px' }}>
                  <th >
                    MedicineName</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>discount</th>
                  <th>Remove</th>

                </tr>
              </thead>
              <tbody>

                {
                  selection.map((v, i) => {
                    return (
                      <tr>
                        <td>{v.medname}</td>
                        <td>{v.tprice}</td>
                        <td>{v.quantity}</td>
                        <td>{v.discount}</td>
                        <td>
                          <Button onClick={() => this.Remove(i)}
                            size="sm"> X </Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            <hr />
            <br />

            <Button variant="primary"
              onClick={this.handleShow}>
              check Out
  </Button>
          </Form>

          <Modal className="Modal"
            style={{ marginTop: "50px" }}
            show={this.state.show}
            onHide={this.handleClose}>

            <Modal.Header closeButton>
              <Modal.Title>
                Please Enter Details
            </Modal.Title>
            </Modal.Header>


            <Modal.Body>
              <Form>

                <Form.Row>
                  <Form.Group as={Col}
                    controlId="formGridEmail">
                    <Form.Label>
                      Name of Client
        </Form.Label>
                    <Form.Control name="cname"
                      onChange={this.handleCh}
                      type="text"
                      placeholder="Full Name" />
                  </Form.Group>


                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>
                    Address
      </Form.Label>
                  <Form.Control
                    name="address"
                    onChange={this.handleCh}
                    placeholder="1234 Main St" />
                </Form.Group>


                <Form.Group controlId="formGridAddress1">
                  <Form.Label>
                    Contact Number
      </Form.Label>
                  <Form.Control
                    name="number"
                    onChange={this.handleCh}
                    placeholder="03XXXXXXXXX" />
                </Form.Group>

                <Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>
                      Contacted person
      </Form.Label>
                    <Form.Control
                      name="rname"
                      onChange={this.handleCh}
                      placeholder="Name" />
                  </Form.Group>
                </Form.Row>
              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"
                onClick={this.onclick}>
                Confirm
          </Button>
              <Button variant="secondary"
                onClick={this.handleClose}>
                Close
          </Button>

            </Modal.Footer>
          </Modal>

        </Container>
      </React.Fragment>
    )
  }
}

export default form;