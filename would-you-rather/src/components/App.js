import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>

          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
