import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./Productcontext";
import { useContext } from "react";



function Userdetail () {

    const {id} = useParams();
    const navigate = useNavigate();
    const {selectedProduct} = useContext(ProductContext);

    const back = () => navigate('/users');
    
    if (!selectedProduct) {
        return <p>No Items Select!</p>;
    }

    return (
        <div className="ms-3">
            <h5 className="mt-3 text-success">Product Details!</h5>
            {/* <p style={{textAlign:'left'}}>ID: {id}</p> */}
            <p style={{textAlign:'left'}}>Name: {selectedProduct.name}</p>
            <p style={{textAlign:'left'}}>Price: {selectedProduct.price}</p> 
            <p style={{textAlign:'left'}}>Color: {selectedProduct.color}</p> 
            <button onClick={back} className="btn btn-warning btn-sm">Back</button>
        </div>
    );
}; export default Userdetail;