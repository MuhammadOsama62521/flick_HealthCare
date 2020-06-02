import React, { Component } from 'react'
import { Carousel,Col,Container,Row,Card,CardDeck} from 'react-bootstrap'
import logo from '../images/med.jpg'
import logo2 from '../images/pic.jpg'
import logo3 from '../images/pic2.png'


import '../App.css';


class Carousels extends Component {
    render() {
        return (
        <React.Fragment>
          
<div className="carousel" >
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
      width="300px"
      height="500px"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      width="300px"
      height="500px"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      width="300px"
      height="500px"
      alt="Third slide"
    />

  </Carousel.Item>


</Carousel>
<br/>
<br/>
<br/>
<br/>
<hr/>
               <div id="weare">
<h1>
                  WHO WE ARE?
                </h1>
                <div style={{textAlign: 'center'}}>
                <p>
                  <b>

                
                  salda;lsda;lsdaklsjdklasjdklasjd
                  <br/>
                  asdkjasdkjhasdjkasdkl=lkklsadjaklsjd
                  <br/>
                  asdasldjaksdhfjfhhdfjhdfjhdsjfhuhfj
                  <br/>
                  jpiiosdfsdjfjsdhfsdhfklsjdflkasjdfkjasdl
                  <br/>
                  ksjdhfskdjfskdjflskdldjalsk=djklasd=jdka
                  </b>
                </p>
</div>
                
</div>
                
                <br/>
<br/>
<br/>
<hr/>
<div id="ourteam">
<h1>
                  CONTACT US
                </h1>
</div>
<br/>
 
<Container className="cards" >
        


 <div style={{alignContent:'center',alignItems:'center',textAlign:'center'}}>
 <CardDeck >
  <Row >
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>MUHAMMAD ADNAN</Card.Title>
    <Card.Text>
      Adnan is or sales representative and look after all the sales process of the company.
      <br/>
      Contact Adnan for business
      <br/>
      <br/>
      Phone Number:<br/>0300-2649466
    </Card.Text>
  
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>HUNAIN</Card.Title>
    <Card.Text>
      Hunain is our sales expert and one of our prime partner
      <br/>
      for business feel free to contact Hunain
      <br/>
      <br/>
      Phone number:
      <br/>

      0321-2890002
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>

  </Row>


</CardDeck>
 </div>
 

</Container>
<br/>
<br/>
<br/>
<br/>
                </div>
        </React.Fragment>
            
        )
    }
}

export default Carousels
