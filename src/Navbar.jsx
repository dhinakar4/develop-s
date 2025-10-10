import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "./ProductContext";

function Navbar() {

    const navigate = useNavigate();
    const {visitDone} = useNavigation();

    const click = (e) => {
        if(!visitDone) {
            e.preventDefault();
        }
    };
    return (
        <nav>
          <Link to="/" className="ms-3">Home</Link>
          <Link to="/about"onClick={click}></Link>
          <Link to="/contact">Contact</Link>
        </nav>
    )
} export default Navbar;