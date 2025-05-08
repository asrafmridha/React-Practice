import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../Pages/loader';

const PrivateRoute = ({children}) => {

    const {user,loading} =useContext(AuthContext);
    console.log(loading);
    if(loading){
        return <Loader></Loader>
    }
    if(user && user.email){
        return children;
    }
    return (
        <Navigate to="/auth/login"></Navigate>
    );

};

export default PrivateRoute;