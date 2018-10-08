import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class AddQuestion extends Component {
  state = {
    // optionOneText: '',
    // optionTwoText: '',
    // newQuestionId: '',
    'optionOne': '',
    'optionTwo': '',
    'toHome': false
    //toHome: false
  }

  handleOptionOneChange = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
      optionOne
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
      optionTwo
    }))
  }

  handleAddQuestion = (e, optionOne, optionTwo) => {
    e.preventDefault()

    const { dispatch, authedUser } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))
      .then(() => this.setState({
        'optionOne': '',
        'optionTwo': '',
        'toHome': true
      }))
  }

  // handleChange = (key) => (e) => {
  //   this.setState({
  //     [key]: e.target.value
  //   })
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { optionOne, optionTwo } = this.state
  //   const { handleAddQuestion } = this.props
  //
  //   handleAddQuestion({ optionOne, optionTwo })
  //     .then(res => {
  //       this.setState({
  //         newQuestionId: res.question.id
  //       })
  //     })
  // }

  render() {
    const { optionOne, optionTwo } = this.state

    if (!this.props.authedUser) {
        return <Redirect to={{ pathname: '/login', state: { returnPath: '/add' }}} />
    }

    if (this.state.toHome) {
      return <Redirect to='/' />
    }

    // if (newQuestionId) {
    //   return <Redirect to={`/question/${newQuestionId}`} />
    // }

    return (
      <div>
        <h3 className='center header'>Add New Question</h3>
        <Paper>
          {/* <form onSubmit={this.handleSubmit} className='center'> */}
          <form onSubmit={(e) => this.handleAddQuestion(e, optionOne, optionTwo)} className='center'>
            <div style={{ margin: 10 }}>
              <TextField
                style={{ marginTop: 10 }}
                placeholder="Option 1"
                //onChange={this.handleChange('optionOne')}
                onChange={this.handleOptionOneChange}
                value={optionOne}
                id='optionOne'
                required
                rows={2}
              />
            </div>
            <div style={{ margin: '10px' }}>
              <TextField
                placeholder="Option 2"
                //onChange={this.handleChange('optionTwo')}
                onChange={this.handleOptionTwoChange}
                value={optionTwo}
                id='optionTwo'
                required
              />
            </div>
            <Button
              className='center'
              style={{marginBottom: 10}}
              type="submit"
              disabled={optionOne === '' || optionTwo === ''}
            >Submit
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
