import { createContext, useContext, useState } from "react";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [allowAbout, setAllowAbout] = useState(false);
    const [allowProduct, setAllowProduct] = useState(false);
    const [allowBlog,setAllowBlog] = useState(false);



    return (
        <ProductContext.Provider value={{selectedProduct,setSelectedProduct,allowAbout,setAllowAbout,
            allowProduct,setAllowProduct,allowBlog,setAllowBlog
        }}>
            {children}
        </ProductContext.Provider>
    )
};  export const useProduct = () => useContext(ProductContext);
