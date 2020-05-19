import React, { Component } from 'react'
import {Table,thead,tr,tbody, Container,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import axios from 'axios';
import jsPdf from 'jspdf'


 class table extends Component {
state={
  meddetails:[],
  checkbox : [],
  search:[],
  med:'',
  html:''
}

componentDidMount(){
  axios.get('http://localhost:1337/tabs').then(res=>{
  
  this.setState({
    meddetails:res.data
  })
  
  
})

}

onClick=()=>{
  const{meddetails,med,search}=this.state;
  console.log(meddetails)


  
  // meddetails.find((med)=>{
  //     return 
  // })
  meddetails.map((v,i)=>{
    
    if(med==v.medname){
      this.setState({
        search:[{
          id:v.id,
          medname:v.medname,
          price:v.price,
          quantity:v.quantity ,
          pk:v.packsize
        }]
      })
      console.log("0",search[0])
      console.log("1",search[1])
    }
    else{
      console.log("no found")
    }
   })

}
onChange=(event)=>{
  this.setState({
    [event.target.name]: event.target.value,
  })

}
// onClick=()=>{
//  console.log(this.state.html)
//  var doc= new jsPdf('p','pt')
//  doc.fromHTML(this.state.html, 10, 10)
//  doc.save("name.pdf")
// }



    render() {
      const{meddetails,search}=this.state;
     
        return (
         <React.Fragment>
           <Container className="main00a" >
             <div id="main11">

             
           <div>
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
        <hr/>
  <Table striped bordered hover>
            
  <thead>
    <tr>
      <th>id</th>
      <th>MedicineName</th>
      <th>price</th>
      <th>quantity</th>
      <th>pack Size</th>
      
    </tr>
  </thead>
  <tbody>
  {/* {meddetails.map((value,index)=>{
return(
  <tr>
    <td>
      <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" value={value.id} onClick={this.changeHandler}/>
  </Form.Group>
  </td>
<td>{value.id}</td>
<td>{value.medname}</td>
<td>{value.price}</td>
<td>{value.quantity}</td>
<td>{value.packsize}</td>
<td>{value.discount}</td>
    </tr>
)
})} */}
{
  search.map((v,i)=>{
    return(
      <tr>
    
<td>{v.id}</td>
<td>{v.medname}</td>
<td>{v.price}</td>
<td>{v.quantity}</td>
<td>{v.pk}</td>
    </tr>
    )
  })
}
  </tbody>
</Table>
<br/>
<br/>
<br/>
<hr/>
<Button  
onClick={
  ()=>{

  var htmll= document.getElementById("main11").innerHTML;
  console.log(htmll)
  this.setState({
    html:htmll
  },()=>{
    var doc= new jsPdf('p','pt')
    doc.fromHTML(this.state.html, 10, 10)
    doc.save("name.pdf")
  })
}}
       >
Download
</Button>

</div>
      </Container>
      </React.Fragment>
        )
    }
}
export default table;