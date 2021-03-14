import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


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
          <Route exact path="/" component={Landing} />
          
          <section className="container">
            <switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}


export default App;