import React, { Component } from 'react'
import { Carousel,Col,Image,Container,Row,Card,CardDeck} from 'react-bootstrap'
import logo from '../images/med.jpg'
import logo2 from '../images/med3.jpg'
import we from '../images/we.jpeg'


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
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
      width="300px"
      height="500px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
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
                  OUR TEAM!
                </h1>
</div>

                <Container className="cards">
        


 
 <CardDeck>
  <Row>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={we} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
</Col>
  </Row>


</CardDeck>


  
  
</Container>
                </div>
        </React.Fragment>
            
        )
    }
}

export default Carousels
