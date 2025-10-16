import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menubar () {

    const totalItems = useSelector( state=> state.cart.items.reduce((sum, item) => sum+item.quantity, 0));

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark px-4">
                <Link to="/" className="navbar-brand h1">Shoping spot</Link>
                <Link to="/cart" className="position-relative">
                    <FaOpencart size={22} color="white"/>{totalItems > 0 && (
                    <span className="badge bg-danger">{totalItems}</span>
                    )}
                </Link>
            </nav>
        </div>
    )
}; export default Menubar