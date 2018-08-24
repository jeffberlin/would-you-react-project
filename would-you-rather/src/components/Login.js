import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class Login extends Component {
  state = {
    checked: '',
  }

  handleToggle = value => () => {
    this.setState({
      checked: value
    })
  }

  handleSignIn = () => {
    setAuthedUserId(this.state.checked, this.props.dispatch)

    this.setState({
      toHome: true
    })
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='login-box center'>
        <div>
          <h2 className='header'>Sign in to continue</h2>
        </div>
        {this.props.users.map(user => (
          <div>
            <span>{user.name}</span>
            <div key={user.id}></div>
            <img
              className='avatar'
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
            />
          </div>
        ))}
        <Button onClick={this.handleSignIn} disabled={!this.state.checked}>
          Log In
        </Button>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {users: Object.keys(users).map(key => users[key])}
}

export default connect(mapStateToProps)(Login)
