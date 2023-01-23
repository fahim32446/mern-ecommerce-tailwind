import { Outlet, Navigate } from 'react-router-dom'



const PrivateRoutes = () => {
    const token = localStorage?.getItem("user") || null;

    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes