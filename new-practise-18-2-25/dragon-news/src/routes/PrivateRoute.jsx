import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/loader';

const PrivateRoute = ({children}) => {

    const {user,loading} =useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user && user.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );

};

export default PrivateRoute;