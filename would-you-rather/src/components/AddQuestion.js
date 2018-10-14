import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(handleAddQuestion({
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser
    }))

    this.setState(() => ({
      toHome: true
    }))
  }

  handleChange = event => {
    event.preventDefault()
    const text = event.target.value
    this.setState({
      [event.target.id]: text
    })
  }

  render() {
    // if (this.props.authedUser) {
    //   if (this.state.toHome === true) {
    //     return <Redirect to='/' />
    //   }
    // }

    if (!this.props.authedUser) {
      return <Redirect to='/login' />
    }

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h3 className='header'>Add New Question</h3>

        <Card className='question-card'>
          {/* <CardHeader title='Add New Question' className='header'></CardHeader> */}
          <CardContent>
            <h3 style={{ color: '#3a4b58'}}>Would You Rather</h3>
            <Divider />
            <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  id='optionOne'
                  label='Option One'
                  value={this.state.optionOne}
                  onChange={this.handleChange}
                  margin='normal'
                />
              </div>
              <div>
                <TextField
                  id='optionTwo'
                  label='Option Two'
                  value={this.state.optionTwo}
                  onChange={this.handleChange}
                  margin='normal'
                />
              </div>
              <Button
                type='submit'
                disabled={this.state.optionOne === '' || this.state.optionTwo === ''} style={{ color: '#30CF83' }}>
                Add
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
