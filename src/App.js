import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import ErrorBoundary from './components/ErrorPage/ErrorBoundary';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './App.scss';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ './components/Dashboard')
);

const Sidebar = lazy(() =>
  import(/* webpackChunkName: "Sidebar" */ './components/Sidebar')
);

const NewComponent = lazy(() =>
import(/* webpackChunkName: "NewComponent" */ './components/NewComponent')
);

function App() {
  const isApiLoading = useSelector((state) => state.Common.isApiLoading);
  return (
    <Router>
      {isApiLoading && <Loader />}
      <Suspense fallback={<Loader />}>
      <Row>
        <Col xs={2} id='sidebar-wrapper'>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Switch>
            <Route
              path='/dashboard'
              children={
                <ErrorBoundary>
                  <Dashboard />
                </ErrorBoundary>
              }
            />
            <Route
              path='/dsadsda'
              children={<div>This is a child component</div>}
            />
            <Route
              path='/new-component'
              children={<NewComponent />}
            />
            <Route path='/' children={<Redirect to='/dashboard' />} />
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </Col>
      </Row>
      </Suspense>
    </Router>
  );
}

export default App;
