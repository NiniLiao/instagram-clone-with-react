import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, Routes } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


export default function ProtectedRoute({ user, children, ...rest }) {
    return (
      <Routes>
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return React.cloneElement(children, { user });
          }
  
          if (!user) {
            return (
              <Navigate
                to={{
                  pathname: ROUTES.LOGIN,
                  state: { from: location }
                }}
              />
            );
          }
  
          return null;
        }}
      />
      </Routes>  
    );
  }    

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
};