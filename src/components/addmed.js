import React, { Component } from 'react'
import {Container,Form,Col, Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2';

class Addmed extends Component {

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
    //quantity check krwani hy
      }


state={
    med_name:'',
    price:'',
    Tprice:'',
    quantity:'',
    pack_size:'',
    mrp:'',
    med_details:{},
    meddetails:[],
    newquantity:'',
    med:'',
    customer:'',
    address:'',
    number:'',
    invoice_id:'',
    mreturn:'',
    qreturn:'',
    areturn:'',
    customers:{},
    uprice:'',
    return:{},
    consult_person:'',
    statusid:'',
    info:{}

}


handleCh = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
    

}

onClick=()=>{
    const{med_name,price,Tprice,quantity,pack_size,mrp}=this.state;
    if(
    med_name!=='' 
    &&
    price!=='' 
    &&
    quantity !==''
    && 
    pack_size!=='' 
    &&
    mrp!==''
    )
    {
        if(isNaN(price)||isNaN(quantity)||isNaN(mrp)||isNaN(pack_size) || 
        price < 0 || quantity < 0 || mrp < 0 || pack_size < 0)
        {
        window.alert('invalid input')
        }
        else{
          let i = mrp * (15 / 100)
        var t= (mrp) - (i)
        this.setState({
            med_details:{
                med_name:this.state.med_name,
                price:this.state.price,
                Tprice:t,
                quantity:this.state.quantity,
                pack_size:this.state.pack_size,
                mrp:this.state.mrp
            }
        },()=>{
            axios.post('http://localhost:1337/add', {
        med_details:this.state.med_details
    }).then(res=>{
        Swal.fire({
            icon: 'success',
            title: "Done",
            text: "MEDICIENE ADDED" 
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
    }
    else{
        Swal.fire({
            icon: 'error',
            title: "Ops",
            text: "Please Enter details properly" 
        })
    
    }
}

handleUpdate=()=>{
const{med,newquantity,uprice} =this.state;

if(med!==''&&
med!=="Choose.."
&& 
newquantity!==''
&& uprice!=='')
{
    if(isNaN(this.state.newquantity) 
    || isNaN(this.state.uprice) 
    || newquantity < 0 
    || uprice < 0)
    {
        window.alert("invalid input")
    }
    else{
    axios.post('http://localhost:1337/updatem',{
        mediciene:{
            medname:this.state.med,
            newquantity:this.state.newquantity,
            price:this.state.uprice
        }
    }).then(res=>{
        Swal.fire({
            icon: 'success',
            title: 'UPDATED',
            text: this.state.name
        })

    }).catch(error=>{
window.alert("Something went wrong please try later")
    })
    }
}
else{
    Swal.fire({
        icon: 'error',
        title: "Ops",
         text: "Please Enter details properly" 
    })

}


}
addCustomer=()=>{
    const{customer,address,number,consult_person}=this.state;
if(customer!==''
&& address!==''
&& number!==''
&& consult_person!=='')
{
                if(isNaN(number) || number < 0){
window.alert("invalid input")
}
else{
    this.setState({
        customers:{
            customer_name:this.state.customer,
            address:this.state.address,
            contact:this.state.number,
            consult_person:this.state.consult_person
        }
    },()=>{
        axios.post('http://localhost:1337/addcus',{
    customer:this.state.customers
    }).then(res=>{
    Swal.fire({
        icon: 'success',
        title: 'CUSTOMER ADDED'
    })

    }).catch(error=>{
window.alert("Something went wrong please try later")
    })
    })
}
}
else{
    Swal.fire({
        icon: 'error',
        title: "Ops",
        text: "Please Enter details properly" 
    })
}

    }
    retunOrder=()=>{
        const{invoice_id,qreturn,areturn,mreturn}=this.state;
        if(invoice_id!==''&&
        qreturn!==''
        && areturn!==''
        && mreturn!=='')
        {
if(isNaN(invoice_id) 
|| isNaN(qreturn) 
|| isNaN(areturn) 
|| invoice_id < 0 
|| qreturn < 0 
|| areturn < 0 )
{
window.alert('invalid input')
}
else{
    this.setState({
        return:{
            invoice_id:this.state.invoice_id,
            med_name:this.state.mreturn,
            quantity:this.state.qreturn,
            amount:this.state.areturn
        }
    },()=>{
        axios.post('http://localhost:1337/return',{
    return:this.state.return
    })
    .then(res=>{
        Swal.fire({
            icon: 'success',
            title: 'updated'
    })
    })
    .catch(error=>{
window.alert("Something went wrong please try later")
    })
    })

}
        }
        else{
            Swal.fire({
                icon: 'error',
                title: "Ops",
                text: "Please Enter details properly" 
            })
        }
    }


    //updating status
    bilPay=()=>{
        const{statusid}=this.state;
        if(statusid!=='')
        {
if(isNaN(statusid) || statusid < 0)
{
    window.alert("invalid input")
}
else{
    this.setState({
        info:{
            invoice_id:this.state.statusid,
        }
    },()=>{
        axios.post('http://localhost:1337/status',{
            information:this.state.info
        })
        .then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'updated'
        })
        })
        .catch(error=>{
            Swal.fire({
                icon: 'error',
                title: "Ops",
                text: "please check your input" 
            })
        })
    })


}
        }
        else{
            Swal.fire({
                icon: 'error',
                title: "Ops",
                 text: "Please Enter details properly" 
            })
        }
    }

    render() {
        const{meddetails}=this.state;
        return (
            
            <React.Fragment>
                <Container>
                    <div style={{textAlign:'center',
                    fontFamily: 'Poppins'}}
                    >
                    <label style={{textAlign:'center'}}><b>
                    ADD A NEW MEDICINE
                        </b></label> 
                    </div>
                
                <Form style={{fontFamily: 'Poppins'}}>
<Form.Row>


<Form.Group as={Col} controlId="formGridmedname">
    <Form.Label>Medicine Name</Form.Label>
    <Form.Control 
    name="med_name" 
    onChange={this.handleCh} 
    type="text" 
    placeholder="Full Name" 
    />  
    </Form.Group> 
    </Form.Row>

<Form.Row>
<Form.Group as={Col} controlId="formGridquantity1">
    <Form.Label>Quantity</Form.Label>
    <Form.Control 
    name="quantity" 
    onChange={this.handleCh} 
    placeholder="0" 
    />
</Form.Group>

<Form.Group as={Col} controlId="formGridsize">
    <Form.Label>Pack Size</Form.Label>
    <Form.Control 
    name="pack_size" 
    onChange={this.handleCh} 
    placeholder="0" 
    />
</Form.Group>
</Form.Row>


<Form.Row>
<Form.Group as={Col} controlId="formGridprice1">
    <Form.Label>Price</Form.Label>
    <Form.Control 
    name="price" 
    onChange={this.handleCh} 
    placeholder="$" 
    />
</Form.Group>
  
  
  <Form.Group as={Col} controlId="formGridprice">
    <Form.Label>M.R.P</Form.Label>
    <Form.Control 
    name="mrp" 
    onChange={this.handleCh} 
    placeholder="$" 
    />
</Form.Group>



  </Form.Row>
</Form >
<Button onClick={this.onClick}
style={{ backgroundColor: '#0e716e',
border:'none',
color:'white'}}
>
    ADD
</Button>
<hr/>
<br/>
<div style={{textAlign:'center',
fontFamily: 'Poppins'}}
>
    <b>
        UPDATE QANTITY
    </b>
</div>
<br/>
<br/>



<Form style={{fontFamily: 'Poppins'}}>

    <Form.Row>
        <Form.Group as={Col} controlId="formGridname">
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
<option>{v.med_name}</option>
                    )
})}
                </Form.Control> 
        </Form.Group>
    
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col}  controlId="formGridquantity">
    <Form.Label>Enter Quantity</Form.Label>
    <Form.Control 
    name="newquantity" 
    onChange={this.handleCh} 
    placeholder="0" 
    />
</Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col}  controlId="formGridquantity">
    <Form.Label>Price</Form.Label>
    <Form.Control 
    name="uprice" 
    onChange={this.handleCh} 
    placeholder="$" 
    />
</Form.Group>
    </Form.Row>
</Form>
<Button onClick={this.handleUpdate}
style={{ 
    backgroundColor: '#0e716e',
    border:'none',
    color:'white'
}}
    >
    UPDATE
</Button>
<br/>
                <br/>
<hr/>
                <div style={{textAlign:'center',
                fontFamily:'poppins'}}
                >
                    <b >
                        ADD CUSTOMER
                    </b>
                </div>
                <br/>
                <br/>
                <Form style={{fontFamily: 'Poppins'}}>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridname">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control 
        name="customer" 
        onChange={this.handleCh} 
        type="text" 
        placeholder="Full Name" 
        />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridname">
      <Form.Label>Consult Person</Form.Label>
        <Form.Control 
        name="consult_person" 
        onChange={this.handleCh} 
        type="text" 
        placeholder="Full Name" 
        />
    </Form.Group>
    </Form.Row>
  

<Form.Row>
<Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control 
    name="address" 
    onChange={this.handleCh} 
    placeholder="Street/No Block etc" 
    />
</Form.Group>

<Form.Group as={Col} controlId="formGridcontact">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control 
    name="number" 
    onChange={this.handleCh} 
    placeholder="03XXXXXXXXX" 
    maxLength="11"/>
</Form.Group>
</Form.Row>
</Form>
<Button onClick={this.addCustomer}
style={{ backgroundColor: '#0e716e',
border:'none',
color:'white'}}
>
    ADD CUSTOMER
</Button>
<hr/>
<br/>
<div style={{textAlign:'center',
fontFamily:'poppins'}}
>
<b><label>
    RETURNED ORDER
    </label></b>
</div>
<br/>
<br/>
<Form style={{fontFamily: 'Poppins'}}>
<Form.Row>
<Form.Group as={Col} controlId="formGridreturn1">
    <Form.Label>Enter Invoice Number</Form.Label>
    <Form.Control 
    name="invoice_id" 
    onChange={this.handleCh} 
    placeholder="Invoice id without FL205-" />
</Form.Group>

<Form.Group as={Col} controlId="formGridreturn1">
    <Form.Label>Medicine Returned</Form.Label>
    <Form.Control 
    name="mreturn" 
    onChange={this.handleCh} 
    placeholder="mediciene name" 
    />
</Form.Group>


</Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="formGridreturn2">
    <Form.Label>Quantity Returned</Form.Label>
    <Form.Control 
    name="qreturn" 
    onChange={this.handleCh} 
    placeholder="0" 
    />
</Form.Group>

<Form.Group as={Col} controlId="formGridreturn2">
    <Form.Label>Amount Returned</Form.Label>
    <Form.Control 
    name="areturn" 
    onChange={this.handleCh} 
    placeholder="$" 
    />
</Form.Group>
</Form.Row>
</Form>
<Button onClick={this.retunOrder}
style={{ backgroundColor: '#0e716e',
border:'none',
color:'white'}}
>
    UPDATE
</Button>
<br/>
<hr/>
<br/>
<div style={{textAlign:'center',
fontFamily:'poppins'}}
>
    <b>
    UPDATE CUSTOMER'S STATUS
    </b>
</div>
<br/>
<br/>
<Form style={{fontFamily: 'Poppins'}}>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridreturn2">
    <Form.Label>Enter Invoice ID</Form.Label>
    <Form.Control 
    name="statusid" 
    onChange={this.handleCh} 
    placeholder="Invoice id without FL205-" 
    />
</Form.Group>
    </Form.Row>
</Form>
<Button
onClick={this.bilPay}
style={{ backgroundColor: '#0e716e',
border:'none',
color:'white'}}
>
    BILL PAYED
</Button>
<br/>
<hr/>
        </Container>
            </React.Fragment>
        )
    }
}

export default Addmed;
