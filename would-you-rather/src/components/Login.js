import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUserId } from '../actions/shared'
import { Redirect } from 'react-router-dom'

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
      <div className='login-box'>
        <div>
          
        </div>
      </div>
    )
  }
}

export default connect()(Login)
