import { Link,Outlet } from "react-router-dom";

function Nested () {
    return (
        <div>
        <nav className="mt-4">
        {/* <Link to=""  className="text-dark ms-3" style={{textDecoration:'none'}} >Home</Link>  */}
        <Link to="About" className="text-dark ms-3" style={{textDecoration:'none'}}>About</Link>
        <Link to="Contact" className="text-dark ms-3" style={{textDecoration:'none'}}>Contact</Link>
        </nav>
        <Outlet />
        </div>
    );
};
 export default Nested;