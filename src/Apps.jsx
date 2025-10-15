import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./redux/counterSlice";
import 'bootstrap/dist/css/bootstrap.min.css';



function Apps () {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="ms-4 mt-3">
            {/* <h4>Using Redux Method!</h4>
            <h3>{count}</h3>
            <button onClick={() => dispatch({type:'INCREMENT'})} className="btn btn-sm border border-dark">+</button>
            <button onClick={() => dispatch({type:'DECREMENT'})} className="btn btn-sm border border-dark ms-1">-</button> */}
            <h4>Using Redux Toolkit!</h4>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())} className="btn btn-sm border">+</button>
            <button onClick={() => dispatch(decrement())} className="btn btn-sm border">-</button>

        </div>
    )   
}; export default Apps