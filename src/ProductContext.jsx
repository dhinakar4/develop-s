import { Children, createContext, useContext, useState } from "react";


// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     return (
//         <ProductContext.Provider value={{ selectedProduct,setSelectedProduct}}>
//             {children}
//         </ProductContext.Provider>
//     )
// }


   const NavigateContext = createContext();
   
   export const NavigateProvider = ({children}) => {
    const [allowAbout, setAllowAbout] = useState(false);

    return (
        <NavigateContext.Provider value={{allowAbout,setAllowAbout}}>
            {children}
        </NavigateContext.Provider>
    )
   };

   export const useNavigation = () => useContext(NavigateContext);
