import Home from '../components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function RouteList() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
           

          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default RouteList;
