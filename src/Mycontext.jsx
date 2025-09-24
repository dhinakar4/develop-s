import { createContext, useReducer, useState } from "react";

 const Mycontext = createContext();

export const Myprovider = ({children}) => {
    const [bgcolor,setBgcolor] = useState('yellow');
    const [text,setText] = useState('black');
    const [size,setSize] = useState('16px');

    const counter=(state, action)=>{
        switch(action.type){
            case "in":
               return state+1
               case "de":
               return state-1
               default:
               return state
        }
    }

    const [count, dispatch]=useReducer(counter, 0)

    const Changebgcolor = () => {
        setBgcolor(bgcolor === "yellow" ? "lightblue" : "yellow")
    };
    
    const changetextcolor = () => {
        setText(text === "black" ? "red" : "black")
    };

    const changetextsize = () => {
        setSize(size === "16px" ? "22px" : "16px")
    };

    const resettheme = () => {
        setBgcolor('yellow');
        setText('black');
        setSize('16px');
    };

    return (
        <div>
            <Mycontext.Provider 
            value={{bgcolor, text, size, Changebgcolor, changetextcolor, changetextsize, resettheme}}>   
            {children}
            </Mycontext.Provider>
                <p style={{width:'10%'}}>{count}</p>
            <button onClick={()=>dispatch({type:"in"})}>++</button>
            <button onClick={()=>dispatch({type:"de"})}>--</button>
        </div>
    )
}; export default Mycontext;
