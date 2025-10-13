import { useNavigate } from "react-router-dom";
import { useProduct } from "./ProductContext";

function Homeup() {
  const navigate = useNavigate();
  const { allowAbout, setAllowAbout ,allowBlog,setAllowBlog} = useProduct();

  const readMore = () => {
    setAllowAbout(true); 
    // setAllowBlog(false);
    navigate("/about");
  };

  return (
    <div className="text-center mt-5">
      <h3>Welcome to Home Page </h3>
      {!allowAbout && (
        <button onClick={readMore} className="btn btn-primary btn-sm rounded-pill">
          Read More
        </button>
      )}
      {allowAbout && (
        <button
        //  onClick={() => navigate("/")} 
         className="btn btn-primary btn-sm rounded-pill">
          Read More
        </button>
      )}
    </div>
  );
}

export default Homeup;