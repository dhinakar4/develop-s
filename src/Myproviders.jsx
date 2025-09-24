import React, { useState } from "react";
import Mycontext from "./Mycontext";
import Mycomponent from "./Mycomponent";

const Myproviders = () => {
  const [data, setData] = useState({name : 'Jhon',age : 19,city : 'Bangalore',email :'jhony23@gmail.com'});

  return (
    <Mycontext.Providers value={{ data, setData }}>
        <Mycomponent />
    </Mycontext.Providers>
  );
};
export default Myproviders;
