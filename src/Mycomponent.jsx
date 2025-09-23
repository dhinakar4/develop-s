import React, { useContext } from "react";
import Mycontext from "./Mycontext";

const Mycomponent = () => {
  const { data, setData } = useContext(Mycontext);
  const handle = () => {
    setData({name :'Max',age :21,city :'Chennai',email :'madmaxz@gmail.com'});
  };

  return (
    <div>
      <p style={{textAlign:"left"}}>User name : {data.name}<br />Age : {data.age}<br />City : {data.city}<br />Email : {data.email}</p>
      <button onClick={handle}>update</button>
    </div>
  );
}; export default Mycomponent;
