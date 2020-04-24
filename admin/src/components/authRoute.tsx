import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token')) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default AuthRoute;
