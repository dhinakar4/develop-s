import { Navigate, useNavigate } from "react-router-dom";
import { useProduct } from "./ProductContext";

function About() {
  const { allowAbout ,allowBlog,setAllowBlog} = useProduct();
  // const navigate = useNavigate();

  if (!allowAbout) return <Navigate to="/" replace/> 
  if (allowBlog) return <Navigate to="/blog" replace />

  // const readMore = () => {
  //    setAllowBlog(true); 
  //   navigate("/blog");
  // }

  return (
    <div className="text-center mt-5">
      <h3>About Page!</h3>
            {/* {!allowBlog && (
        <button onClick={readMore} className="btn btn-primary btn-sm rounded-pill">
          Read More
        </button>
      )}
        {allowBlog && (
        <button
        //  onClick={() => navigate("/")} 
         className="btn btn-primary btn-sm rounded-pill">
          Read More
        </button>
      )} */}
    </div>
  );
}

export default About;