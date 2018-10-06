import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import AddQuestion from './AddQuestion'
import Dashboard from './Dashboard'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import Poll from './Poll'
import ErrorPage from './ErrorPage'
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
            {!this.props.showLogin && <Nav />}
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/question/:id' component={Poll} />
              <Route path='/add' component={AddQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    showLogin: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
