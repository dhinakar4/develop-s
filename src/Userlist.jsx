import { useNavigate } from "react-router-dom";
import { ProductContext } from "./Productcontext";
import { useContext } from "react";


function Userlist (){
    const navigate = useNavigate();
    const { setSelectedProduct} = useContext(ProductContext)

    const users= [
        {id:1,name:"Samsung",price:'$39999',color:'Black'},
        {id:2,name:"Apple",price:'$42000',color:'Gold'},
        {id:3,name:"Vivo",price:'$29999',color:'Gray'},
    ];

    const view = (user) => {
        setSelectedProduct(user);
        navigate(`/users/${user.id}`);
    };

    return (
        <div className="ms-2">
            <h6 className="mt-2">Product List page!</h6>
            {users.map((user) => (
                <div key={user.id}style={{marginBottom:'10px'}}>
                    <span>{user.name}</span> 
                    <button onClick={() => view(user)}className="ms-2 btn btn-sm btn-success">View</button>
                </div>
            ))}
        </div>
    );
}; export default Userlist;