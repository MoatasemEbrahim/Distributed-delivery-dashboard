import React,{FC} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import routes from './routes';
import VisitorRoute from './VisitorRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/Layout/Layout';

const routesWithLayout = [];
const routesWithoutLayout = [];

routes.forEach((route) => {
    if (route.withoutLayout) {
        routesWithoutLayout.push(route);
    } else {
        routesWithLayout.push(route);
    }
});

const renderRoutes = renderedRoutes => renderedRoutes.map((route) => {
    const {
        exact = true, path, component, visitorOnly = false,
    } = route;

    return visitorOnly
     ? (
       <VisitorRoute
         path={path}
         component={component}
         exact={exact}
         key={path}
       />
        )
    : (
      <PrivateRoute
        path={path}
        component={component}
        exact={exact}
        key={path}
      />
    );
});

const router:FC = () => (
  <Router>
    <Switch>
      {renderRoutes(routesWithoutLayout)}
      {renderRoutes(routesWithLayout.map(route =>{
        const RouteComponent = route.component;
        return {...route,component:<Layout><RouteComponent /></Layout>}
        }))}
        <Route path="/" component={()=><p>404</p>} />
    </Switch>
  </Router>
);

export default router;
