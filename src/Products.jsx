// Products.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/cartSlice";
import samsungImg from "./assets/samsung.jpg";
import Menubar from "./Menubar";

function Products() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Samsung S24", price: 40000, image: samsungImg },
  ];

  return (
    <div>
      <Menubar />
      <div className="container py-4">
        <h3 className="text-center mb-4">Products Page!</h3>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                  <h5>{product.name}</h5>
                  <p>$ {product.price}</p>
                  <button
                    onClick={() => dispatch(addItem(product))}
                    className="btn btn-success btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
