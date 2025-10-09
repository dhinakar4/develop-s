import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

function Userdetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedProduct } = useContext(ProductContext);

  const back = () => navigate("/users");

  if (!selectedProduct) {
    return <p className="text-danger">No Items Select!</p>;
  }

  return (
    <div className="col-md-2 ms-2 mt-3 ">
      <h5 className="mt-3 text-success">Product Details!</h5>
      <div className="card mx-auto shadow-lg bg-light border border-secondary">
        <img
          src={selectedProduct.Image}
          className="card-img-top"
          alt={selectedProduct.name}
          style={{ objectFit: "contain",height:'200px',borderRadius:'10px' }}
        />
        <div className="card-body text-center">
          {/* <p style={{textAlign:'left'}}>ID: {id}</p> */}
          <h5 className="card-title">{selectedProduct.name}</h5>
          <p className="card-text">
            <strong>Price: </strong>
            {selectedProduct.price} <br />
            <strong>Color: </strong>
            {selectedProduct.color}</p>
          <button
            onClick={back}
            className="btn text-decoration-underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
export default Userdetail;
