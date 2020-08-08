import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from './components/header';
import { Container } from 'react-bootstrap';
import { StateProvider } from './data/store.js';

const Home = React.lazy(() => import('./areas/home'));
const Test = React.lazy(() => import('./areas/test'));
const Helpee = React.lazy(() => import('./areas/help/helpee'));
const Helper = React.lazy(() => import('./areas/help/helper'));
const CluePage = React.lazy(() => import('./areas/clue-page'));
const PianoPage = React.lazy(() => import('./areas/piano/piano'));
const ComicPage = React.lazy(() => import("./areas/comic/comic-page"));
const MazePage = React.lazy(() => import("./areas/maze/maze-page"));

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
                <Route path={`/help`} exact render={() => <Helpee />} />
                <Route path={`/helper`} exact render={() => <Helper />} />
                <Route path={`/piano`} exact render={() => <PianoPage />} />
                <Route path={`/comic`} exact render={() => <ComicPage />} />
                <Route path={`/maze`} exact render={() => <MazePage />} />
              </Switch>
            </Container>
            {/* <Footer /> */}
          </div>
        </StateProvider>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
