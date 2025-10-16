// CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "./redux/cartSlice";
import Menubar from "./Menubar";
function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Menubar />
      <div className="container py-4">
        <h2>Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {items.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "5px", objectFit: "contain", marginRight: "10px" }} />
                    <div>
                      <h6>{item.name}</h6>
                      <small>₹{item.price} × {item.quantity}</small>
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <h5>Total: ₹{total.toLocaleString()}</h5>

            <button
              className="btn btn-warning mt-3"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
