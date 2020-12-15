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
import './App.scss';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ './components/Dashboard')
);

function App() {
  const isApiLoading = useSelector(state => state.Common.isApiLoading);
  return (
    <Router>
      {isApiLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path='/dashboard'
            children={
              <ErrorBoundary>
                <Dashboard />
              </ErrorBoundary>
            }
          />
          <Route path='/' children={<Redirect to='/dashboard' />} />
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
