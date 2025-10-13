import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useProduct } from "./ProductContext";


function Navbar() {
  const {allowAbout,allowBlog} = useProduct();
   return (
    <nav className="shadow-sm ms-2 p-3 ">
      <div className="container" >
        <Link className="ms-1 text-dark" to="/"style={{textDecoration:'none'}}>Home</Link>
       {allowAbout && !allowBlog ? (<Link className="text-dark ms-3" to="/about"style={{textDecoration:'none'}}>About</Link>) : (<span className=" ms-3">About</span>) }
        <Link className="text-dark ms-3" to="/blog"style={{textDecoration:'none'}}>Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;