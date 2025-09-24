// function app(props){
//     return(

//         <div>
//             <h5>Adding props to other component :</h5><br />
//             <h6>hello,I am {props.name} I am {props.age} years old!</h6>
//             <p style={{color : 'blue'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eum cupiditate enim modi quo sed, consequatur iste nam! Iure, alias perferendis maiores vel itaque ipsum dicta tenetur ea deserunt provident?</p>
//         </div>
//     )
// } export default app
import React from "react";
import Myproviders from "./Myproviders";
import Mycomponent from "./Mycomponent";
import { Myprovider } from "./Mycontext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const App = () => {
  return (
    // <Myprovider>
    //     <Mycomponent />
    // </Myprovider>
    // <Changebgcolor>
    //     <Changetext />
    // </Changebgcolor>
    <Myprovider>
      <div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </Myprovider>
  );
};
export default App;
