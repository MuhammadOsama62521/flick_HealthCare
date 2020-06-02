import React, { Component } from 'react'
import { Container,Row,Col,Table,} from 'react-bootstrap'
import '../App.css'
import Axios from 'axios'

class invoice extends Component{

    componentDidMount(){

        Axios.get('http://localhost:1337/getdata',{
            headers:{
                Authorization: 'Bearer ' +localStorage.getItem('Token')
              }
        })
        .then(res=>{
            this.setState({
                invoice_details:res.data.invoice_details,
                customer_details:res.data.customer_details,
                sales_details:res.data.sales_details
            })
           
        })
        .then(()=>{
          this.fill()
        })
        .catch(error=>{
        window.alert("something went wrong")
        })
       

        
    }

fill=()=>{
 const{invoice_details,customer_details,sales_details}=this.state;
 console.log(sales_details)
 invoice_details.map((v,i)=>{
    this.setState({
      obj1:{
      id:v.invoice_id,
      date:v.date,
      due_date:v.due_date,
      customer_id:v.customer_id,
      sales_person:v.sales_person,
      mode_of_payment:v.mode_of_payment,
      amount:v.total_amount
      }
    }
    )
 })

  customer_details.map((val,i)=>{
    this.setState({
      obj2:{
      name:val.customer_name,
     address:val.address,
     person:val.consult_person,
     contact:val.contact
      }
    }
    )
 })
 

}



state={
    invoice_details:[],
    customer_details:[],
    sales_details:[],
    obj1:{},
    obj2:{}
}
render(){
    const{sales_details,obj1,obj2}=this.state;
    return(

<React.Fragment>
    <Container className="cont" id="main7" style={{backgroundColor:'white'}} >
    <div  className="main0" style={{textAlign:'center',marginRight:'500px',width:'1000px'}}>
  
        <div style={{textAlign:'center',fontSize:'50px'}}>
           <b>FLICK HEALTH CARE</b> 
        </div>
        <hr/>
        <br/>
        
        <div style={{textAlign:'left'}}>
        <Row className="details">
            <div className="details" style={{marginTop:'50px',fontSize:'18px'}}>
                
                   <label>Suit 803,Block 9,Dastagir,FB area</label> 
                    <br/>
                    <label>Karachi,Pakistan</label>
                    <br/>
                    <label> Email:contact@flickhealthcare.com</label>
                   
                    <br/>

            </div>
            <Col  style={{marginLeft:'400px'}}>
<div style={{textAlign:'center',paddingRight:'70px'}}>
<label style={{fontSize:'30px'}}>
                
                <b>
                    INVOICE
                </b>
            </label>
</div>
            <br/>
            <br/>
            <Row sm> 
            <Col sm>
              <b>
              DATE 
              </b> 
              </Col>
              <Col>
              <Col>
              {this.state.obj1.date}
              </Col>
              </Col>
              </Row>
            
          <Row sm> 
          <Col sm>
                <b>
                INVOICE# 
                </b>
              </Col>
              <Col>
              <Col>
              FL205-{this.state.obj1.id}
              </Col>
              </Col>
              </Row> 
              <Row >
              <Col sm>
                <b>
                CUSTOMER_ID 
                    </b> 
              </Col>
              <Col sm >
              <Col sm>
              CI-{this.state.obj1.customer_id}
              </Col>
              </Col>
              </Row>
            
          {this.state.obj1.mode_of_payment ==='Credit'
          &&  <Row>
                <Col sm>
              <b>
              DUE DATE
              </b>
                </Col>
                <Col>
                <Col>
                {this.state.obj1.due_date}
                </Col>
                </Col>
            </Row>}
            <Row>
                <Col sm>
               
               <b>SALESMAN</b>  
               
                </Col>
                <Col>
                <Col>
                {this.state.obj1.sales_person}
                </Col>
                </Col>
            </Row>
            <Row>
                <Col sm>
                  <b>PAYMENT</b>  
                </Col>
                <Col>
                <Col>
                {this.state.obj1.mode_of_payment}
                </Col>
                </Col>
            </Row>
            </Col>
        </Row>
        </div>
        <Row>
        <div style={{textAlign:'left'}}>
            <label >
                <b>
                BILL TO
                </b>
            </label>

            <br/>
    <label>{this.state.obj2.name}</label>
<br/>
    <label >{this.state.obj2.person}</label>
<br/>
    <label >{this.state.obj2.address}</label>
<br/>
<label >
    0{this.state.obj2.contact}
</label>
            </div>
        </Row>
            
        
   <Row>
   <Table className="table" striped bordered responsive="md"
   style={{width:'980px'}} >

<thead>
  <tr >
    <th >
      SNo</th>
    <th>DESCRIPTION</th>
    <th>quantity</th>
    <th>pack size</th>
    <th>Trade price</th>
    <th>Discount(%)</th>
    <th>Amount</th>

  </tr>
</thead>
<tbody>
{
      sales_details.map((v,i)=>{
          return(
                <tr>
          <td>{i+1}</td>
          <td>{v.med_name}</td>
          <td>{v.quantity}</td>
          <td>{v.pack_size}</td>
          <td>{v.price}</td>
          <td>{v.discount}</td>
          <td>{v.amount}</td>
              </tr>
              )
            })
          }

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
</tbody>
</Table>
<Row style={{paddingLeft:'820px'}}>  
  TOTAL PRICE = {this.state.obj1.amount} 
 </Row>
 
   </Row>
   <br/>
    </div>
    <div style={{backgroundColor:'lightgrey',width:'420px',textAlign:'center'}}>
        <label><b>OTHER COMMENTS</b></label>
    </div>
    <div>
        <label>1.Total payment due in 7 days</label>
        <br/>
        <label>2.please include the invoice number on your check</label>
        <br/>
        <label>3.make all checks payable to Flick Health Care</label>
        <br/>
        <label>4.Expiry Claims will be acceptable 6 months before Expiry</label>
        <br/>
        <label>5.Warranty under Section 23(1)(i) of Drugs Act 1976</label>
    </div>
  <div style={{paddingLeft:'750px'}}>
      <lable>
          <u>
              <b>
              RECIEVER SIGNATURE
              </b>
          </u>
      </lable>
  </div>
  <br/>
  <div style={{alignItems:'center',width:'1000px'}}>
      <lable>
          THANK YOU FOR BUSINESS WITH US WE WISH TO HAVE A GREAT BUSINESS BIND WITH YOU 
      </lable>
  </div>

    </Container>
    
</React.Fragment>


    )
}
}
export default invoice;