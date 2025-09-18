import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiAlienware } from "react-icons/si";
import { SiGimp } from "react-icons/si";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';



function Bootstrap(){
    useEffect(() => {
        AOS.init({duration:500});
    },[]);
    return(
        <div>
            <Container fluid>
                <div className='p-5 bg-primary text-light animation border border-dark'  data-aos="zoom-in-down">Animation type Zoom</div>
                <div className='p-5 bg-warning text-dark animations border border-dark' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Animations type Fade</div>
                <Row>
                    <Col className='bg-primary p-2 border border-dark'>1 of 2</Col>
                    <Col sm={12} md={6} className='bg-success p-2 border border-dark'>2 of 2</Col>
                </Row>
                <Row>
                    <Col md ={6} lg ={4} className='bg-danger p-2 border border-dark'>1 of 3</Col>
                    <Col sm={12} md ={6} lg ={4} className='bg-warning p-2 border border-dark'>2 of 3 <SiAlienware></SiAlienware></Col>
                    <Col md={6} lg ={4} className='bg-info p-2 border border-dark'>3 of 3 <SiGimp></SiGimp></Col>
                </Row>
                <Row>
                    <Col md={6} xl ={3} className='bg-dark text-light p-2 border border-dark'>1 of 4</Col>
                    <Col sm={12} md={6} xl ={3} className='bg-secondary text-light p-2 border border-dark'>2 of 4</Col>
                    <Col sm={12} md={6} xl ={3} className='bg-primary text-light p-2 border border-dark'>3 of 4</Col>
                    <Col className='bg-success text-light p-2 border border-dark'>4 of 4</Col>
                </Row>
                <Row>
                    <Col className='bg-warning p-5 border border-dark'>
                    <Row>
                      <Col md = {12} lg = {6} className='bg-danger p-4 border border-dark'></Col>
                      <Col sm = {12} md = {12} lg = {6} className='bg-info p-4 border border-dark'>
                      <Row>
                       <Col md={6} className='bg-secondary p-4 border border-dark float-end'></Col>
                       <Col sm={12} md={6} className='bg-dark p-4 border border-dark'></Col>
                       </Row>
                      </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Bootstrap