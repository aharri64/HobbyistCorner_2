import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';


// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
const App = () => {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Navbar />  
          <section className="container">
            <switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}


export default App;
