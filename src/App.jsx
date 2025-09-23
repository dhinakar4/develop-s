

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
import Myprovider from "./Myprovider";
import Mycomponent from './Mycomponent';
 
const App = () => {
    return (
        <Myprovider>
            <Mycomponent />
        </Myprovider>
    )
};
 export default App