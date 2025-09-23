import React, { useState } from "react";
import Mycontext from "./Mycontext";
import Mycomponent from "./Mycomponent";

const Myprovider = () => {
  const [data, setData] = useState({name : 'Jhon',age : 19,city : 'Bangalore',email :'jhony23@gmail.com'});

  return (
    <Mycontext.Provider value={{ data, setData }}>
        <Mycomponent />
    </Mycontext.Provider>
  );
};
export default Myprovider;
