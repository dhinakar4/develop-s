import React, { useContext } from "react";
import Mycontext from "./Mycontext";


const ComponentC = () => {
    const {text,  changetextsize, resettheme} = useContext(Mycontext)

    return (
        <div style={{height:'100px',width:'30%',color:text,margin:'5px',backgroundColor:'lavender',border:'1px solid black'}}>
        <p className="mt-2">Change the Textsize</p>
        <button onClick={changetextsize} className="btn btn-success p-1" style={{marginLeft:'170px'}}>Change</button>

        <button onClick={resettheme} className="btn btn-info p-1" style={{marginLeft:'10px'}}>Reset</button>
        </div>
    )
}; export default ComponentC;