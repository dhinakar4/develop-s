
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLaptop } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";


import './Boottemplate.css'

function Boottemplate(){
   useEffect(() => {
          AOS.init({duration:500});
      },[]);
    return (
        <div className='template'>
          <div id="sec1">
         <Container fluid id='sec1'>
         <Navbar expand="lg"variant="dark" sticky="top" className='bg-dark'>
         <Navbar.Brand href="#" className='title'>Start Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" className='menubar'/>
         <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-5"
            navbarScroll
          >
            <Nav.Link href="#sec1" className='text-light menu1 me-2'>Service</Nav.Link>
            <Nav.Link href="#sec2" className='text-light menu1 me-2'>Portfolio</Nav.Link>
            <Nav.Link href="#sec3" className='text-light menu1 me-2'>About</Nav.Link>
            <Nav.Link href="#sec4" className='text-light menu1 me-2'>Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <div className='text-center words px-3 mx-auto'> 
          <h1>Welcome To Our Studio!</h1>
          <h2 className='fw-bolder display display-6 mt-3'>IT'S NICE TO MEET YOU</h2>
          <Button variant="warning" size="lg" className='mt-3 p-4 px-5 text-light'>
          Tell Me More!
        </Button>
        </div>
        </Container>
        </div>
        <div id="sec2">
          <Container id='sec2'className='bg-light'>
            <h2 className='text-center mt-5 pt-5 fw-bolder'>SERVICES</h2>
            <p className='mt-4 fst-italic text-secondary fw-bolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, culpa?</p>
            <Row className='mt-5'>
              <Col>
            <Card style={{ width: '20rem' }} className='card1 mt-4 bg-light col-4 mx-auto'>
            <div className='mt-5'>
            <FiShoppingCart className='icon1 rounded-circle mx-auto d-block pb-4 pt-4 pe-2'></FiShoppingCart>
            </div>
            <Card.Body >
              <Card.Title className='fw-bolder pt-4 text-center fs-3'>E-Commerce </Card.Title>
              <Card.Text className=' ms-0 w-100 bg-light text-secondary mt-4 p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus, possimus optio ipsa eaque odit enim amet. Blanditiis nobis consectetur suscipit ratione porro quis adipisci?</p>
             </Card.Text>
           </Card.Body>
         </Card>
         </Col>
           <Col>
            <Card style={{ width: '20rem' }} className='card1 mt-4 bg-light col-4 mx-auto'>
            <div className='mt-5'>
            <FaLaptop className='icon1 rounded-circle mx-auto d-block pb-4 pt-4'></FaLaptop>
            </div>
            <Card.Body >
              <Card.Title className='fw-bolder pt-4 text-center fs-3'>Responsive Design</Card.Title>
              <Card.Text className=' ms-0 w-100 bg-light text-secondary mt-4 p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus, possimus optio ipsa eaque odit enim amet. Blanditiis nobis consectetur suscipit ratione porro quis adipisci?</p>
             </Card.Text>
           </Card.Body>
         </Card>
         </Col>
           <Col>
            <Card style={{ width: '20rem' }} className='card1 mt-4 bg-light col-4 mx-auto'>
            <div className='mt-5'>
            <MdLockOutline className='icon1 rounded-circle mx-auto d-block pb-4 pt-4'></MdLockOutline>
            </div>
            <Card.Body >
              <Card.Title className='fw-bolder pt-4 text-center fs-3'>Web Security</Card.Title>
              <Card.Text className=' ms-0 w-100 bg-light text-secondary mt-4 p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus, possimus optio ipsa eaque odit enim amet. Blanditiis nobis consectetur suscipit ratione porro quis adipisci?</p>
             </Card.Text>
           </Card.Body>
         </Card>
         </Col>
         </Row>
          </Container>
        </div>
        <div id="sec3">
          <Container>
            <h2 className='text-center mt-5 pt-5 fw-bolder'>PORTFOLIO</h2>
            <p className='mt-4 fst-italic text-secondary fw-bolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, culpa?</p>
            <Row>
              <Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/1.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Threads</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                  Illustration
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col>
            <Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/2.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Explore</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                  Graphic Design
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col><Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/3.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Finish</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                  Identity
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row>
              <Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/4.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Lines</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                   Branding
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col>
            <Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/5.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Southwest</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                   Website Design
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col>
            <Col>
               <Card style={{ width: '20rem' }} className='mt-4 bg-light col-4 mx-auto' data-aos="zoom-in">
                <Card.Img variant="top" src="../src/assets/portfolio/6.jpg" className='ps-2 pe-2' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Window</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100'>
                   Photography
                 </Card.Text>
               </Card.Body>
            </Card>
            </Col>
            </Row>
          </Container>
        </div>
        <div id="sec4">
          <Container>
            <h2 className='text-center mt-5 pt-5 fw-bolder'>ABOUT</h2>
            <p className='mt-4 p-2 fst-italic text-secondary fw-bolder text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia exercitationem velit? Aperiam qui assumenda minima aliquid! Dolorem, blanditiis cum.</p>
            <div className="timeline">
            <div className="timeline-item mb-5">
              <img src="../src/assets/about/1.jpg" alt="" />
            </div>
            <div className="timeline-item mt-5 mb-5">
              <img src="../src/assets/about/2.jpg" alt="" />
            </div>
            <div className="timeline-item mt-5 mb-5">
              <img src="../src/assets/about/3.jpg" alt="" />
            </div>
            <div className="timeline-item mt-5">
              <img src="../src/assets/about/4.jpg" alt="" />
            </div>
            </div>
          </Container>
        </div>
        <div id="sec5">
          <Container>
            <h2 className='text-center mt-5 pt-5 fw-bolder'>OUR AMAZING TEAM</h2>
            <p className='mt-4 p-2 fst-italic text-secondary fw-bolder text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, unde?</p>
                <Row>
              <Col>
               <Card style={{ width: '15rem' }} className='mt-4 border border-light col-4 mx-auto my-2' data-aos="fade-right">
                <Card.Img variant="top" src="../src/assets/team/1.jpg" className='rounded-circle border border-5' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Parveen Anand</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light text-secondary w-100'>
                   Lead Designer
                 </Card.Text>
                  <img src="../src/assets/icons/twitter.svg" alt=""className='img-fluid icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/facebook.svg" alt=""className='img-fluid ms-4 icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/linkedin.svg" alt="" className='img-fluid ms-4 icon pt-3 icon-hover' />
               </Card.Body>
            </Card>
            </Col>
            <Col>
               <Card style={{ width: '15rem' }} className='mt-4 border border-light col-4 mx-auto my-2' data-aos="fade-up">
                <Card.Img variant="top" src="../src/assets/team/2.jpg" className='rounded-circle border border-5' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Diana Petersen</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100 text-secondary'>
                   Lead Marketer
                 </Card.Text>
                   <img src="../src/assets/icons/twitter.svg" alt=""className='img-fluid icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/facebook.svg" alt=""className='img-fluid ms-4 icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/linkedin.svg" alt="" className='img-fluid ms-4 icon pt-3 icon-hover' />
               </Card.Body>
            </Card>
            </Col>
            <Col>
               <Card style={{ width: '15rem' }} className='mt-4 border border-light col-4 mx-auto my-2' data-aos="fade-left">
                <Card.Img variant="top" src="../src/assets/team/3.jpg" className='rounded-circle border border-5' />
                <Card.Body>
                 <Card.Title className='text-center fw-bold'>Larry Parker</Card.Title>
                 <Card.Text className='ms-0 text-center bg-light w-100 text-secondary'>
                  Lead Developer
                 </Card.Text>
                   <img src="../src/assets/icons/twitter.svg" alt=""className='img-fluid icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/facebook.svg" alt=""className='img-fluid ms-4 icon pt-3 icon-hover' />
                   <img src="../src/assets/icons/linkedin.svg" alt="" className='img-fluid ms-4 icon pt-3 icon-hover' />
               </Card.Body>
            </Card>
            </Col>
            </Row>
            <div className='text-center fs-6 p-4  text-secondary fst-italic'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illo obcaecati corrupti aperiam provident voluptatibus excepturi similique, laudantium saepe, dignissimos eligendi blanditiis tempora. Animi adipisci blanditiis placeat excepturi rem aliquid.</p></div>
          </Container>
        </div>
        </div>
    )
}
export default Boottemplate
