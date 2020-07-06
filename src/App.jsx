import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './areas/home';
import Test from './areas/test';

const ROOT = '/quest';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          {/* <Route path="/" component={Home} strict exact />
        <Route path="/test" component={Test} strict exact /> */}

          <Route path={`/`} exact ><Home /></Route>
          <Route path={`/test`} exact ><Test /></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
