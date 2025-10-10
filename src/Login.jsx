import { useNavigate } from "react-router-dom";


function Login({setIsAuthenticated}) {
    const Navigate = useNavigate()

    const login = () => {
        setIsAuthenticated(true);
        Navigate('/dashboard');
    }
    return (
        <div className="ms-3">
            <h5 className="mt-4">Login Page!</h5>
            <button onClick={login} className="btn btn-sm btn-primary">Login</button>
        </div>
    )
} export default Login;