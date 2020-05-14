import React, { Component } from 'react'
import {Table,thead,tr,tbody, Container} from 'react-bootstrap'
import axios from 'axios';
 class table extends Component {
state={
  meddetails:[]
}

componentDidMount(){
  axios.get('http://localhost:1337/tabs').then(res=>{
  
  this.setState({
    meddetails:res.data
  })
  console.log(this.state.meddetails);

})
}

    render() {
      const{meddetails}=this.state;
      
        return (
         <React.Fragment>
           <Container>
           <Table striped bordered hover>
  <thead>
    <tr>
        <th>id{this.props.admin}</th>
      <th>MedicineName</th>
      <th>price</th>
      <th>quantity</th>
      <th>pack Size</th>
      <th>Discount</th>
    </tr>
  </thead>
  <tbody>
  {meddetails.map((value,index)=>{
    console.log('ssss',value);
return(
  <tr>
      <td>{value.id}</td>
          <td>{value.medname}</td>
      <td>{value.price}</td>
<td>{value.quantity}</td>
<td>{value.packsize}</td>
<td>{value.discount}</td>
    </tr>
)
             })}
    
    
  </tbody>
</Table>
           </Container>
         </React.Fragment>
            
        )
    }
}
export default table;