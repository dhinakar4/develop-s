import React, { useContext, useState } from "react";
import Mycontext from "./Mycontext";
import 'bootstrap/dist/css/bootstrap.min.css';


function Changebgcolor () {
    const {bgcolor,textcolor,textsize,Changebgcolor,changetextcolor,changetextsize,resettheme} 
    = useContext(Mycontext);

    return (
        <div>
            <h4>Change the components:</h4>

            <div style={{height:'100px',width:'30%',backgroundColor:bgcolor,margin:'5px',border:'1px solid black'}}>
                <p>Change the Textcolor</p>
                <button onClick={changetextcolor} className="btn btn-danger p-1" style={{marginLeft:'170px'}}>Change</button>
            </div>

            <div style={{height:'100px',width:'30%',fontSize:textsize,margin:'5px',border:'1px solid black',backgroundColor:'lightgreen'}}>
                <p>Change the Backgroundcolor</p>
                <button onClick={Changebgcolor} className="btn btn-primary p-1" style={{marginLeft:'170px'}}>Change</button>
            </div>

            <div style={{height:'100px',width:'30%',color:textcolor,margin:'5px',backgroundColor:'lavender',border:'1px solid black'}}>
                <p>Change the Textsize</p>
                <button onClick={changetextsize} className="btn btn-success p-1" style={{marginLeft:'170px'}}>Change</button>
            </div>

        </div>
    );
}; export default Changebgcolor;
