import React, { Component } from 'react'
import { Container,Row,Col,Button,Table,} from 'react-bootstrap'
import logo from '../images/logo.jpg'
import jsPdf from 'jspdf'
import html2canvas from 'html2canvas'
import '../App.css'
class invoice extends Component{
render(){
    return(

<React.Fragment>
    <Container className="cont" id="main7" style={{backgroundColor:'white'}} >
    <div  className="main0" style={{textAlign:'center',marginRight:'500px',width:'1000px'}}>
       
        {/* <Row style={{alignItems:'center',width:'1000px'}}>
            <div 
            style={{width:'65px',height:'60px',backgroundImage:`url(${logo})`,
            marginRight:'30px',marginLeft:'140px'}}
            >
        </div>
            <label style={{fontSize:'40px'}}><b>FLICK HEALTH CARE</b></label>

        </Row> */}
        <br/>
        <Row className="details">
            <div className="details" style={{marginTop:'50px'}}>
                
                   <label>Suit 803,Block 9,Dastagir,FB area</label> 
                    <br/>
                    <label>Karachi,Pakistan</label>
                    <br/>
                    <label> Email:contact@flickhealthcare.com</label>
                   
                    <br/>
                    <label>
                    Website: flickhealthcare.com
                    </label>
                    
               
            </div>
            <Col  style={{marginLeft:'400px'}}>

            <label style={{fontSize:'30px'}}>
                
                <b>
                    INVOICE
                </b>
            </label>
            <br/>
            <br/>
            <Row sm> 
               <Col sm>
                   DATE
               </Col>
               <Col>
               <Col>
               24/24/2020
               </Col>
               </Col>
               </Row>
            
  
           <Row sm> 
               <Col sm>
               
                   INVOICE
               
               </Col>
               <Col>
               <Col>
               FL205-544
               </Col>
               </Col>
               </Row> 
               <Row >
               <Col sm>
               
                   CUSTOMER ID
              
               </Col>
               <Col >
               <Col>
               CI-555
               </Col>
               </Col>
               </Row>
            
            <Row>
                <Col sm>
               
                    DUE DATE
               
                </Col>
                <Col>
                24/24/2020
                </Col>
            </Row>
            <Row>
                <Col sm>
               
                   SALESMAN
               
                </Col>
                <Col>
                ARIF
                </Col>
            </Row>
           
            <Row>
                <Col sm>
               
                    MODE OF PAYMENT
               
                </Col>
                <Col>
                CASH
                </Col>
            </Row>
            </Col>
        </Row>
        <Row>
        <div>
            
            <label style={{marginRight:'20px'}}>
                <b>
                BILL TO
                </b>
            </label>
            <br/>
            <label>CUSTOMER</label>
<br/>
<label style={{marginRight:'30px'}}>person</label>
<br/>
<label style={{marginRight:'28px'}}>address</label>
<br/>
<label style={{marginRight:'29px'}}>
    contact
</label>
            </div>
        </Row>
            
        
   <Row>
   <Table className="table" striped bordered responsive="md" >

<thead>
  <tr >
    <th >
      SNo</th>
    <th>DESCRIPTION</th>
    <th>quantity</th>
    <th>pack size</th>
    <th>Trade price</th>
    <th>Discount</th>
    <th>Amount</th>

  </tr>
</thead>
<tbody>
        <tr>
          <td>1</td>
          <td>panadol</td>
          <td>5</td>
          <td>10</td>
          <td>136</td>
          <td>5</td>
          <td>645</td>
        </tr>
        <tr>
          <td>2</td>
          <td>panadol</td>
          <td>5</td>
          <td>10</td>
          <td>136</td>
          <td>5</td>
          <td>645</td>
        </tr>
        <tr>
          <td>3</td>
          <td>panadol</td>
          <td>5</td>
          <td>10</td>
          <td>136</td>
          <td>5</td>
          <td>645</td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
</tbody>
 <label>
     TOTAL AMOUNT
 </label>
 <Col>
 <label>
     56546546
 </label>
 </Col>
</Table> 
   </Row>
   <br/>
    </div>
    <div style={{backgroundColor:'grey',width:'420px',textAlign:'center'}}>
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
    {/* <Button  
onClick={
  ()=>{
    html2canvas(document.querySelector("#main7"),{
        width:800,
        height:1200,
    }).then(canvas => {
      document.body.appendChild(canvas)
       
        // var img =canvas.toDataURL("image/jpeg,1.0");
        // var doc= new jsPdf({
        //     orientation: 'portrait',
        //     format: 'a4'
        // })
        // doc.addImage(img,'JPEG', 0, 0, 250, 200);
        // doc.save("invoice.pdf")
    })
}}
>
Download
</Button> */}
    </Container>
    
</React.Fragment>


    )
}
}
export default invoice;