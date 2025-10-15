// function app(props){
//     return(

//         <div>
//             <h5>Adding props to other component :</h5><br />
//             <h6>hello,I am {props.name} I am {props.age} years old!</h6>
//             <p style={{color : 'blue'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eum cupiditate enim modi quo sed, consequatur iste nam! Iure, alias perferendis maiores vel itaque ipsum dicta tenetur ea deserunt provident?</p>
//         </div>
//     )
// } export default app
import React, { useState } from "react";
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
import { BrowserRouter, Route, Routes,Outlet ,Navigate} from "react-router-dom";
import Nested from "./Nested";
import Userlist from "./Userlist";
import Userdetail from "./Userdetail";
import { ProductProvider } from "./ProductContext";
import Productroute from "./Productroute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Homeup from "./Homeup";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Redux from "./Redux";

function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);

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
    {/* <ProductProvider>
    <BrowserRouter>
      <Navbar />
      <Routes> */}
        {/* <Route path="/" element ={<Homepage />} />
        <Route  path="/Login" element={<CompleteForm />} />
        <Route path="/About" element={<Nested />} >
          <Route index element={<About />} />
          <Route path="List" element={<Todolist />} />
          <Route path="Contact" element={<Contact />} />
        </Route> */}
         
        {/* <Route path="/" element={<Navigate to="/users" />} /> */}
        

        {/* <Route path="/" element={isAuthenticated ? 
          (<Navigate to='/dashboard' replace />) :(<Navigate to='/login' replace />) } />
        <Route path="/dashboard" element={<Productroute isAuthenticated={isAuthenticated}>
          <Dashboard />
        </Productroute>}/>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> */}

        {/* <Route path="/" element={<Homeup />} />
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/users" element={<Userlist />}/>
        <Route path="/users/:id" element={<Userdetail />}/> */}
{/* 
      </Routes>
    </BrowserRouter>
   </ProductProvider> */}
   {/* <Home name ="This is a!"/> */}
    {/* <Bootstrap/> */}
    {/* <Boottemplate/> */}
    {/* <State />
    <Props name = "jhon" age = "31" city = "North!" />
    <States /> */}
    {/* <Mycom /> */}
    {/* <Form /> */}
    {/* <Provider>
      <App />
    </Provider> */}
    {/* <Changetext /> */}
    {/* <App /> */}
    {/* <Todolist /> */}
    {/* <Validation /> */}
    </div> 
  );
};
export default App;
