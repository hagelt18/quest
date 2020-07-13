import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
//import Home from './areas/home';
//import Test from './areas/test';
const Home = React.lazy(() => import('./areas/home'));
const Test = React.lazy(() => import('./areas/test'));
const Help = React.lazy(() => import('./areas/help/help'));

function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <HashRouter basename='/'>
        <div>
          <Switch>
            {/* <Route path={`/`} exact ><Home /></Route>
            <Route path={`/test`} exact ><Test /></Route> */}
            <Route path={`/`} exact render={() => <Home />} />
            <Route path={`/test`} exact render={() => <Test />} />
            <Route path={`/help`} exact render={() => <Help />} />
          </Switch>
        </div>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
