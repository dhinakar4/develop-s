import { useProduct } from "./ProductContext"
import { Navigate } from "react-router-dom";

function Blog() {
    const {allowBlog,setAllowAbout} = useProduct();

    if(!allowBlog)
    return(
        <div className="text-center mt-5">
            <h5>This is a Blog Page!</h5>
        </div>
    )
} export default Blog   