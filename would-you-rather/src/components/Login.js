import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'

// Using Material-UI to help build the layout
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'

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
          <FormControl className='form'>
            <InputLabel htmlFor='selector' className='p-text'>Select User</InputLabel>
            <Select
              value={this.state.checked}
              // onChange={this.handleToggle(user.id)}
              // checked={this.state.checked === user.id}
              inputProps={{
                  name: 'checked',
                  id: 'selector'
              }}
            >
              {this.props.users.map(user => (
                <MenuItem key={user.id}>
                  <Avatar
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                  />
                  <ListItemText className='avatar-name p-text' primary={user.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
