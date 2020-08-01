import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
//import Home from './areas/home';
//import Test from './areas/test';
import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import { StateProvider } from './data/store.js';

const Home = React.lazy(() => import('./areas/home'));
const Test = React.lazy(() => import('./areas/test'));
const Help = React.lazy(() => import('./areas/help/help'));
const CluePage = React.lazy(() => import('./areas/clue-page'));

function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <HashRouter basename='/'>
        <StateProvider>
          <div className="App">
            <Header />
            <Container className="App-Content mb-2">
              <Switch>
                {/* <Route path={`/`} exact ><Home /></Route>
            <Route path={`/test`} exact ><Test /></Route> */}
                <Route path={`/`} exact render={() => <Home />} />
                <Route path={`/clue/:id`} exact render={(props) => <CluePage {...props} />} />
                <Route path={`/test`} exact render={() => <Test />} />
                <Route path={`/help`} exact render={() => <Help />} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </StateProvider>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
