import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => (
  <div>
    <p>Welcome to Home!</p>
  </div>
);

function Homepage () {
    return (
        <div >
        {/* // <nav>
        //     <Link to="/Login" className="text-dark ms-3 ">Login</Link>
        //     <Link to="/List" className="text-dark ms-3 ">List</Link>
        // </nav> */}
       <div></div>
    <Navbar expand="lg" style={{backgroundColor:'lemonchiffon'}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className="text-dark">About</Nav.Link>
            <Nav.Link as={Link} to="/Login" className="text-dark">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> <br />

        </div>  
    );
}; export default Homepage