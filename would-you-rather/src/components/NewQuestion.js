import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      [e.target.id]: text
    }))
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
  render() {
    if (this.props.authedUser) {
      if (this.state.toHome === true) {
        return <Redirect to='/' />
      }
    }
    return (
      <div>
        <h3 className='center'>Add new question</h3>
      </div>
    )
  }
}

export default connect()(NewQuestion)
