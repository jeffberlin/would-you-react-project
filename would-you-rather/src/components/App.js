import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Home from './Home'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import ErrorPage from './ErrorPage'
import { fetchInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            {!this.props.showLogin && <Nav />}
            {/* <Nav /> */}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/question/:id' component={Question} />
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
