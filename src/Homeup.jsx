import { useNavigate} from "react-router-dom";
import { useNavigation } from "./ProductContext";


function Homeup () {
    const navigate = useNavigate();
    const {visitDone, setVisitDone} = useNavigation();

    const read = () => {
        setVisitDone(true);
        navigate('/about');
    };

    return (
        <div>
            <h4>Home page</h4>
            {!visitDone && (<button onClick={read} className="btn btn-underline">Readmore</button>)}
        </div>
    );
} export default Homeup;