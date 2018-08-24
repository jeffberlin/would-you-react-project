import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Card from '@material-ui/core/Card'

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
      <Card className='center card-style'>
        <div>
          <h2 className='header'>Sign in to continue</h2>
        </div>
        <List>
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
        </List>
        <Button onClick={this.handleSignIn}>
          Log In
        </Button>
      </Card>
    )
  }
}

function mapStateToProps ({ users }) {
  return {users: Object.keys(users).map(key => users[key])}
}

export default connect(mapStateToProps)(Login)
