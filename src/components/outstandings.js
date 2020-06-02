import React, { Component } from 'react'
import {Container,Table} from 'react-bootstrap';
import axios from 'axios'



class outstandings extends Component {
   
    componentDidMount(){
        
        axios.post('http://localhost:1337/get',{
            token:localStorage.getItem('Token')
        })
        .then(res=>{
            
           this.setState({
               details:res.data
           })
         })
         .catch(error=>{
            window.alert("something went wrong please try later")
         })
        
    }
   state={
       name:'',
       details:[]
   }
   
   
    render() {

const{details}=this.state;
        return (
            <React.Fragment>
                <Container>
                <Table striped bordered hover responsive="md">
            
            <thead>
              <tr style={{height:'5px'}}>
                <th>invoice_Id</th>
                <th>customer_Id</th>
                <th>Customer_Name</th>
                <th>Medicine</th>
                <th>Price</th>
                <th>quantity</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Due_Date</th>
                
              </tr>
            </thead>
            <tbody>
            
          {
            details.map((v,i)=>{
              return(
                <tr>
              
          <td>FL-{v.invoice_id}</td>
          <td>CI-{v.customer_id}</td>
          <td>{v.customer_name}</td>
          <td>{v.med_name}</td>
          <td>{v.price}</td>
          <td>{v.quantity}</td>
          <td>{v.amount}</td>
          <td>{v.date}</td>
          <td>{v.due_date}</td>
              </tr>
              )
            })
          }
            </tbody>
          </Table>
          <br/>
          <br/>
          <br/>
                </Container>
            </React.Fragment>
        )
    }
}

export default outstandings
