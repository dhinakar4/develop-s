import { createContext, useState } from "react";

 const Mycontext = createContext();

export default Mycontext;

export function Bgcontext({children}) {
    const [bgcolor,setbgcolor] = useState('yellow');
    const [text,settext] = useState('black');
    const [size,setsize] = useState('10px')

    const Changebgcolor = () => {
        setbgcolor(bgcolor === "yellow" ? "lightblue" : "yellow")
    }
    
    const changetextcolor = () => {
        settext(text === "black" ? "red" : "black")
    }

    const changetextsize = () => {
        setsize(size === "10px" ? "20px" : "10px")
    }

    const resettheme = () => {
        setbgcolor({bgcolor: 'red'});
        settext({textcolor: 'black'});
    }

    return (
        <div>
            <Mycontext.Provider 
            value={{bgcolor, text, size, Changebgcolor, changetextcolor, changetextsize, resettheme}}>   
            {children}
            </Mycontext.Provider>
        </div>
    )
}