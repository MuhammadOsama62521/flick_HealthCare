import React, { Component } from 'react'
import { Container, Form, Button, Col, Modal, Table, thead, tr, tbody } from 'react-bootstrap'
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
      this.setState({
        meddetails:res.data
      })
    })

    axios.get('http://localhost:1337/cust',{
      headers:{
        Authorization: 'Bearer ' +localStorage.getItem('Token')
      }

    }).then(res=>{
      this.setState({
        customernames:res.data
      })
      
    })

  }
  state = {
    customernames:[],
    meddetails: [],
    med: '',
    cname: '',
    show:false,
    sname:'',
    quantity: '',
    Tprice: '',
    discount: '',
    details: {},
    selection: [],
    date:'',
    amount:'',
    mop:'',
    dueDate:'',
    pack_size:''
  }
  handleShow = () => {
    const { med, discount, quantity,meddetails,Tprice,sname } = this.state;
    
    if (
      med !== ''
      && sname!==''
      && quantity !== ''
      && discount !== ''
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
    const { selection, 
      med, discount, 
      quantity, price, 
      selected,sname,
      meddetails,Tprice,date,
      amount } = this.state;
    
   this.setState({
     date:moment().format("DD/MM/YYYY"),
     dueDate:moment().add(7, 'days').calendar()
   }
   )
    if (
      med !== 'Choose...'
      && med!==''
      && quantity !== ''
      && discount !== ''
      && sname!== 'Choose...'
      && sname!==''

    ) {
      
      if(isNaN(quantity) || isNaN(discount) || quantity < 0 || discount < 0 ){
        window.alert("invaid input")
                    }
                    else{
                      meddetails.map((v,i)=>{
    
                        if(med===v.med_name){
                          this.setState({
                            Tprice:v.Tprice,
                            pack_size:v.pack_size
                          }
                          ,()=>{
                            if(this.state.discount==='0'){
                              this.state.amount=((this.state.Tprice) * (this.state.quantity))
                            }
                            else{
                              
                              var pro =(this.state.Tprice)*(this.state.quantity);
                              var dis = ((this.state.Tprice) * (this.state.quantity)) * (this.state.discount /100);
                              this.state.amount = (pro) - (dis);
                              
                            }
                            
                            this.setState({
                              selection: [...this.state.selection, {
                                med_name: this.state.med,
                                quantity: this.state.quantity,
                                discount: this.state.discount,
                                Tprice: this.state.Tprice,
                                pack_size:this.state.pack_size,
                                amount:this.state.amount
                              }]
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
  //modals confirm
  onclick = () => {
    const { details, discount,selection,Tprice,meddetails,number } = this.state
    if (
      this.state.cname !=='Choose..'
      &&this.state.cname!==''
      && this.state.mop!=='Choose..'
      && this.state.mop!==''
      && this.state.discount !==''
      && this.state.quantity !==''
    ) {
        this.setState({
          details: {
            customer_name: this.state.cname,
            sales_person:this.state.sname,
            date:this.state.date,
            Due_date:this.state.dueDate,
            mode_of_payment:this.state.mop,
            selection:this.state.selection
          }
        }, () => {
          axios.post('http://localhost:1337/invo',{
            details:this.state.details
          }).then(res=>{
            swal.fire({
              icon: 'success',
              title: "Success",
              text: "Order placed"
            })
            .then(()=>{
              window.location.replace('/invoice')
            })
           })
           .catch(error=>{
       window.alert("Something went wrong please try later")
       window.location.replace('/tabs')
           })
          
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


 




  render() {
    const { meddetails, show, selection,customernames } = this.state;
    
    return (
      <React.Fragment>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col}
                controlId="formGridState">
                <Form.Label>
                  Select Medicine
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
                    controlId="formGridQuantity">
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
            <Button onClick={this.addItems}
            style={{ backgroundColor: '#0e716e',border:'none',color:'white'}}>
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
                  <th>Amount</th>
                  <th>Remove</th>

                </tr>
              </thead>
              <tbody>

                {
                  selection.map((v, i) => {
                    return (
                      <tr>
                        <td>{v.med_name}</td>
                        <td>{v.Tprice}</td>
                        <td>{v.quantity}</td>
                        <td>{v.discount}</td>
                        <td>{v.amount}</td>
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
              onClick={this.handleShow}
              style={{ backgroundColor: '#0e716e',border:'none',color:'white'}}>
              check Out
  </Button>
  <br/>
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
                      CUSTOMER
        </Form.Label>
        <Form.Control name="cname"
                  as="select"
                  onChange={this.handleCh}
                  placeholder="select">

                  <option>Choose..</option>
                  {customernames.map((value, i) => {
                    return (
                      
                      <option>{value.customer_name}</option>
                    )
                  })}
                    

                </Form.Control>
                  </Form.Group>


                </Form.Row>
             <Form.Row>
             <Form.Group controlId="formGridAddress1">
                  <Form.Label>
                    MODE OF PAYMENT
      </Form.Label>
      <Form.Control name="mop"
                  as="select"
                  onChange={this.handleCh}
                  placeholder="select">
                  <option>Choose..</option>
                  <option>Cash</option>
                  <option>Credit</option>
                </Form.Control>
                </Form.Group>
             </Form.Row>



                
              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"
                onClick={this.onclick}
                style={{ backgroundColor: '#0e716e',border:'none',color:'white'}}>
                Confirm
          </Button>
              <Button variant="secondary"
                onClick={this.handleClose}
                style={{ backgroundColor: '#0e716e',border:'none',color:'white'}}>
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