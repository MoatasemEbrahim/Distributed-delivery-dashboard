import React, { useContext, FC, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

 const PrivateRoute:FC<IProps> = ({
 component: Component, path,exact=true
}) => {
  const { user: { token } } = useContext(GlobalContext);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        if (!token) return <Redirect to="/login" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;

interface IProps {
  component: typeof Component,
  path: string,
  exact?: boolean
}
