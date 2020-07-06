import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './areas/home';
import Test from './areas/test';

const ROOT = '/quest';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" component={Home} strict exact />
        <Route path="/test" component={Test} strict exact /> */}

          <Route path={`${ROOT}/`} exact ><Home /></Route>
          <Route path={`${ROOT}/test`} exact ><Test /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
