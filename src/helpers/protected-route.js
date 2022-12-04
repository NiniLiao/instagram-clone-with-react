import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


export default function ProtectedRoute({ user, children, ...rest }) {
  
    return (
        user ? children : <Navigate to='/login'/>
      )
}      

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
};