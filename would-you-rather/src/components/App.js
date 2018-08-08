import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App
