import { createContext, useState } from "react";

 const Mycontext = createContext();

export const Myprovider = ({children}) => {
    const [bgcolor,setBgcolor] = useState('yellow');
    const [text,setText] = useState('black');
    const [size,setSize] = useState('15px');

    const Changebgcolor = () => {
        setBgcolor(bgcolor === "yellow" ? "lightblue" : "yellow")
    };
    
    const changetextcolor = () => {
        setText(text === "black" ? "red" : "black")
    };

    const changetextsize = () => {
        setSize(size === "15px" ? "20px" : "15px")
    };

    const resettheme = () => {
        setBgcolor('yellow');
        setText('black');
        setSize('15px');
    };

    return (
        <div>
            <Mycontext.Provider 
            value={{bgcolor, text, size, Changebgcolor, changetextcolor, changetextsize, resettheme}}>   
            {children}
            </Mycontext.Provider>
        </div>
    )
}; export default Mycontext;
