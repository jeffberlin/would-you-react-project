import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import AddQuestion from './AddQuestion'
import Dashboard from './Dashboard'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
//import ErrorPage from './ErrorPage'
import { fetchInitialUsers, fetchInitialQuestions } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchInitialUsers())
    this.props.dispatch(fetchInitialQuestions())
  }

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
              <Route path='/add' component={AddQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
