import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, path, isAuthenticated, ...rest }) {
 return (
   <Route
     {...rest}
     render={(props) =>
       isAuthenticated ? (
         <Component {...props} />
       ) : (
         <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
       )
     }
   />
 );
}
export default PrivateRoute;
