import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function Form(){
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    const [validName,setvalidName] = useState(false);
    const [validPassword,setvalidPassword] = useState(false);
    const [validEmail,setvalidEmail] = useState(false);
 
    const emailregex = /^[a-z@0-9A-Z.]{4,25}$/;
    const pwdregex = /^[A-Z0-9'$._@]{4,8}$/;

    useEffect (() => {
        if (name.length >= 3) {
            setvalidName(true);
        } else {
            setvalidName(false);
        }
    },[name]);

    useEffect (() => {
        if (pwdregex.test(password)) {
            setvalidPassword(true);
        } else {
            setvalidPassword(false);
        }
    },[password]);

    useEffect (() => {
        if (emailregex.test(email)) {
            setvalidEmail(true);
        } else {
            setvalidEmail(false);
        }
    },[email])

    const handle = (e) => {
        e.preventDefault();
        if (validName && validPassword && validEmail) {
            alert('Accept the datas')
        } else {
            alert('Check the datas');
        }
    }
    return (
    <div style={{height: "50%",width: "30%",backgroundColor: "lightblue",margin: "auto",fontFamily: "serif"}} 
    className="fst-italic border border-dark">
        <center>
        <h4 className="pt-4 fs-bolder">Form Validation</h4>
        <form onSubmit={handle}>
        <br />
        <label>Name </label>
        <input type="text" placeholder="enter the name.." className="ms-5 p-1"
        value={name} onChange={(e) => setname(e.target.value)} 
        style={{border: validName ? "2px solid green" : name ? "2px solid red" : "black"}}/> 
        <br /> <br />


        <label>Password </label>
        <input type="text" placeholder="enter the password.." className="ms-4 p-1"
        value={password} onChange={(e) => setpassword(e.target.value)} 
        style={{border: validPassword ? "2px solid green" : password ? "2px solid red" : "black"}}/>
        <br /> <br />


        <label>Email </label>
        <input type="text" placeholder="enter the email.." className="ms-5 p-1"
        value={email} onChange={(e) => setemail(e.target.value)} 
        style={{border: validEmail ? "2px solid green" : email ? "2px solid red" : "black"}} />
        <br /><br />
        <button type="submit" className="btn btn-dark mb-3">Submit</button>
        </form>
        </center>
    </div>
)
} export default Form;
