import React, { Component } from 'react'
import {Table,thead,tr,tbody, Container,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import axios from 'axios';
import jsPdf from 'jspdf'
import swal from 'sweetalert2'

 class table extends Component {
state={
  meddetails:[],
  search:[],
  med:'',
  html:''
}

componentDidMount(){
  axios.get('http://localhost:1337/tabs',{
    headers:{
      Authorization: 'Bearer ' +localStorage.getItem('Token')
    }
  }).then(res=>{
  
  this.setState({
    meddetails:res.data
  })
  
  
})

}

onClick=()=>{
  const{meddetails,med,search}=this.state;
  meddetails.map((v,i)=>{
    
    if(med==v.med_name){
      this.setState({
        search:[{
          id:v.med_id,
          medname:v.med_name,
          quantity:v.quantity ,
          pk:v.pack_size,
          tp:v.Tprice,
          mrp:v.mrp
        }]
      })
    }
   })
}


onChange=(event)=>{
  this.setState({
    [event.target.name]: event.target.value,
  })

}




    render() {
      const{meddetails,search}=this.state;
     
        return (
         <React.Fragment>
           <Container className="main00a" >
             <div id="main11" >

             
           <div style={{maxWidth:'1000px'}}>
             <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter Medicine Name"
      aria-label="Medicine Name"
      aria-describedby="basic-addon2"
      onChange={this.onChange}
      name="med"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" bg="#4cbdb9" onClick={this.onClick}>
        Search
      </Button>
    </InputGroup.Append>
  </InputGroup>
          </div>
        
        <div style={{maxWidth:'1000px'}}>
        <hr/>
        <Table striped bordered hover>
            
            <thead>
              <tr style={{height:'5px'}}>
                <th>med_id</th>
                <th>Mediciene</th>
                <th>quantity</th>
                <th>Pack_Size</th>
                <th>MRP</th>
                <th>Trade_Price</th>
                
              </tr>
            </thead>
            <tbody>
            
          {
            search.map((v,i)=>{
              return(
                <tr>
              
          <td>{v.id}</td>
          <td>{v.medname}</td>
          <td>{v.quantity}</td>
          <td>{v.pk}</td>
          <td>{v.mrp}</td>
          <td>{v.tp}</td>
              </tr>
              )
            })
          }
            </tbody>
          </Table>
        </div>
  
<br/>
<br/>
<br/>
<hr/>


</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


      </Container>
      </React.Fragment>
        )
    }
}
export default table;