import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector} from 'react-redux';

const ProtectedRoute = ({ path, component, exact }) => {
    
    const { userInfo } = useSelector(state => state.adminReducer)
    console.log(userInfo);
    if (!userInfo) {
        return <Redirect to="/admin/login" />
    } else {
        return <Route path={path} component={component} exact />
    }
};

export default ProtectedRoute;