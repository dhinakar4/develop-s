import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";
import samsungImg from "./assets/samsung.jpg";
import appleImg from "./assets/apple.jpg";
import vivoImg from "./assets/vivo.jpg";
import nothingImg from "./assets/nothing.jpg";

function Userlist() {
  const navigate = useNavigate();
  const { setSelectedProduct } = useContext(ProductContext);

  const users = [
    { id: 1,name: "Samsung",price: "$39999",color: "Silver",Image: samsungImg,},
    { id: 2, name: "Apple", price: "$42999", color: "Gray", Image: appleImg },
    { id: 3, name: "Vivo", price: "$29999", color: "GoldenYellow", Image: vivoImg },
    { id: 4, name: "Nothing", price: "$32999", color: "White", Image: nothingImg},
  ];

  const view = (user) => {
    setSelectedProduct(user);
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="ms-2">
      <h6 className="mt-2">Product List page!</h6>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-3" key={user.id}>
            <div
              className="card shadow-lg border border-secondary bg-light"
              style={{
                width: "80%",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            >
              <img
                src={user.Image}
                className="card-img-top"
                alt={user.name}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  {/* Price: <strong>{user.price}</strong><br />
                                Color: {user.color} */}
                </p>
                <button
                  onClick={() => view(user)}
                  className="ms-2 btn btn-sm btn-success rounded-pill"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Userlist;
