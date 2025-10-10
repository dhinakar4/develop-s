import {  useLocation, Navigate } from "react-router-dom";


const Productroute = ({children, isAuthenticated}) => {

    const location =  useLocation()
    if (!isAuthenticated) {
        return <Navigate to= "/login" state= {{ from: location}} replace />;
    }

    return children;
    
}; export default Productroute