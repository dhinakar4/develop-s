import React, { useContext } from "react";
import Mycontext from "./Mycontext";

const ComponentA = () => {
    const {bgcolor,changetextcolor} = useContext(Mycontext);

    return (

        <div style={{height:'100px',width:'30%',backgroundColor:bgcolor,margin:'5px',border:'1px solid black'}}>
            <p className="mt-2">Change the Textcolor</p>
            <button onClick={changetextcolor} className="btn btn-danger p-1" style={{marginLeft:'170px'}}>Change</button>
        </div>

    )
}; export default ComponentA