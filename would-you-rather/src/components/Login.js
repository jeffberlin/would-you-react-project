import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'

// Using Material-UI to help build the layout
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'

class Login extends Component {
  state = {
    checked: '',
    toRequestedUrl: false
  }
  handleToggle = value => () => {
    this.setState({
      checked: value
    })
  }

  handleSignIn = () => {
    setAuthedUserId(this.state.checked, this.props.dispatch)

    this.setState({
      // toHome: true
      toRequestedUrl: true
    })
  }

  render() {
    // if (this.state.toHome === true) {
    //   return <Redirect to='/' />
    // }
    const { from } = this.props.location.state || { from: {pathname: '/'} }
    const { toRequestedUrl } = this.state

    if (toRequestedUrl === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='center'>
        <Card className='login-container' style={{ marginLeft: '25%', marginRight: '25%' }}>
          <h2 className='header'>Sign in to continue</h2>
          <List>
            {this.props.users.map(user => (
              <ListItem key={user.id} dense button>
                <Avatar
                  src={user.avatarURL}
                  alt={user.name}
                />
                <ListItemText primary={user.name} />
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
            type='submit'
            onClick={this.handleSignIn}
            disabled={!this.state.checked}
            className='login-btn'
          >
            Log In
          </Button>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
    return {
      users: Object.keys(users).map(key => users[key])
    }
}

export default connect(mapStateToProps)(Login)
