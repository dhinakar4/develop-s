import React, { useContext } from "react";
import Mycontext from "./Mycontext";

const ComponentB = () => {
    const {size, Changebgcolor} = useContext(Mycontext);
    
    return (
        <div style={{height:'100px',width:'30%',fontSize:size,margin:'5px',border:'1px solid black',backgroundColor:'lightgreen'}}>
            <p className="mt-2">Change the Backgroundcolor</p>
            <button onClick={Changebgcolor} className="btn btn-primary p-1" style={{marginLeft:'170px'}}>Change</button>
        </div>
    )
}; export default ComponentB