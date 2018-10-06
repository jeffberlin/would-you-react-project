import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    newQuestionId: ''
  }

  MAX_LENGTH = 80

  handleChange = key => e => {
    if (e.target.value.length <= this.MAX_LENGTH) {
      this.setState({ [key]: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { handleAddQuestion } = this.props

    handleAddQuestion({ optionOne, optionTwo })
      .then(res => {
        this.setState({
          newQuestionId: res.question.id
        })
      })
  }

  render() {
    const { optionOne, optionTwo, newQuestionId } = this.state

    if (this.props.authedUser) {
      if (this.state.toHome === true) {
        return <Redirect to='/' />
      }
    }

    if (newQuestionId) {
      return <Redirect to={`/question/${newQuestionId}`} />
    }

    return (
      <div>
        <h3 className='center header'>Add New Question</h3>
        <Paper>
          <form onSubmit={this.handleSubmit} className='center'>
            <div style={{ margin: 10 }}>
              <TextField
                style={{marginTop: 10}}
                placeholder="Option 1"
                onChange={this.handleChange('optionOne')}
                value={optionOne}
                required
                rows={2}
              />
            </div>
            <div style={{ margin: '10px' }}>
              <TextField
                placeholder="Option 2"
                onChange={this.handleChange('optionTwo')}
                value={optionTwo}
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

export default connect(null, {handleAddQuestion})(AddQuestion)
