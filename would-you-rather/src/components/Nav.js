import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
// Material UI
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class Nav extends Component {
/* per Material-UI */
  state = {
    anchorEl: null
  }
  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }
  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }
/*  */

  handleLogout = () => {
    setAuthedUserId(null, this.props.dispatch)
    this.handleClose()
  }

  render() {
    const { anchorEl } = this.state

    return (

      <div style={{ marginBottom: '50px'}}>
        {this.props.loggedInUser
          ?
            <div className='nav'>
              <Toolbar className='container'>
                <Link to='/'>
                  <Button>Home</Button>
                </Link>
                <Link to='/leaderboard'>
                  <Button>Leaderboard</Button>
                </Link>
                <Link to='/add'>
                  <Button>Add Question</Button>
                </Link>
                <div className='logged-in' style={{ marginLeft: '45%' }}>
                  <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                    <Avatar
                      src={this.props.loggedInUser.avatarURL}
                      alt={this.props.loggedInUser.name}
                    />
                  </Button>
                  <span className='login-name'>Logged in as {this.props.loggedInUser.name}</span>
                </div>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </Toolbar>
            </div>
          :
          <div className='nav'>
            <Toolbar className='container'>
              <Link to='/login'>
                <Button>Login</Button>
              </Link>
            </Toolbar>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedInUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(Nav)
