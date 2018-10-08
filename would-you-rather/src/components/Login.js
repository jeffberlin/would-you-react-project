import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'

// Using Material-UI to help build the layout
// import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

class Login extends Component {
  state = {
    checked: ''
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
            <ListItem key={user.id} onChange={this.handleToggle(user.id)} checked={this.state.checked === user.id}>
              <Avatar
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='avatar'
              />
              <ListItemText className='avatar-name p-text' primary={user.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(user.id)}
                  checked={this.state.checked === user.id}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button
          className='login-btn'
          onClick={this.handleSignIn}
        >
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
