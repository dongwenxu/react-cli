import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Bundle from './Bundle';
import routerConfig from './routeConfig';

let configList = [];
function getRoutes(routeConfig) {
  routeConfig.forEach(item => {
      const {children, title, component, name, path} = item;
      if(children) {
        getRoutes(children)
      };
      const Obj = (props) => {
        document.title  = title;
        return (<Bundle load={component}>{(Route) => <Route {...props}/>}</Bundle>)
      };
      configList.push(<Route key={name} exact path={path} component={Obj}/>)
  })
  return configList;
}

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      {getRoutes(routerConfig)}
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;