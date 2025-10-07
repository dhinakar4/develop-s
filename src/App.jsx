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
import Provider from "./Provider";
import Mycomponent from "./Mycomponent";
import { Myprovider } from "./Mycontext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import CompleteForm from "./Validation";
import Todolist from "./Todolist";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import { BreadcrumbItem } from "react-bootstrap";
import { BrowserRouter, Route, Routes,Outlet } from "react-router-dom";
import Nested from "./Nested";

function App  () {
  return (
    <div>
    {/* // <Provider>
    //     <Mycomponent />
    // </Provider>
    // <Changebgcolor>
    //     <Changetext />
    // </Changebgcolor>
    // <Myprovider>
        
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />

    // </Myprovider> */}
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Homepage />} />
        <Route  path="/Login" element={<CompleteForm />} />
        <Route path="/List" element={<Nested />} >
          <Route index element={<Todolist />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
   

    </div> 
  );
};
export default App;
