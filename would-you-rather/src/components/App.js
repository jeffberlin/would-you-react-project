import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Dashboard from './Dashboard'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/question:id' component={QuestionPage} />
              <Route path='/add' component={NewQuestion} />
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App
