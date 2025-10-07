import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Homepage () {
    return (
        <div>
        {/* // <nav>
        //     <Link to="/Login" className="text-dark ms-3 ">Login</Link>
        //     <Link to="/List" className="text-dark ms-3 ">List</Link>
        // </nav> */}
       
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/List">List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>  
    );
}; export default Homepage