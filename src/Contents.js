import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './footer/Footer';
import Container from './Container';
import Header from './header/Header';
import Error404 from './error/404';
import { CheckIn, CheckOut, List, Setting, Time } from './commute';

class Contents extends Component {
    render() {
      return (
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <Switch>
              <Route exact path="/" component={Container} />
              <Route path="/list" component={List} />
              <Route path="/setting" component={Setting} />
              <Route path="/checkin" component={CheckIn} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/time" component={Time} />
              <Route component={Error404} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    }
}

export default Contents;
