import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/shared'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

class UnansweredQuestions extends Component {
  state = {}

  handleSubmit= (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleSaveAnswer({
      authedUser: this.props.authedUser,
      qid: this.props.question.id,
      answer: this.state.answerOption
    }))
  }

  handleChange = event => {
    this.setState({
      answerOption: event.target.value
    })
  }

  render() {
    const { question } = this.props

    return (
      <Card className='center'>
        <CardHeader
          className='card-header-user'
          title={`Posted By ${this.props.author.name}`}
          avatar = {
            <Avatar
              src={this.props.author.avatarURL}
              alt={this.props.author.name}
            />
          }
        />
        <CardContent>
          <h3 style={{ color: '#3a4b58' }}>Would You Rather...</h3>
          <FormControl component='fieldset' style={{ display: 'inline-block' }}>
            <RadioGroup
              value={this.state.answerOption}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value='optionOne'
                control={<Radio />}
                label={question.optionOne.text}
              />
              <FormControlLabel
                value='optionTwo'
                control={<Radio />}
                label={question.optionTwo.text}
                style={{ marginBottom: '10px' }}
              />
            </RadioGroup>
            <Button
              className='vote-btn'
              variant='contained'
              onClick={this.handleSubmit}
              disabled={!this.state.answerOption || this.state.answerOption.length <= 0}
            >
              Vote
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    )
  }
}

function mapStateToProps({ authedUser, questions, users}, { id }) {
  return {
    authedUser: authedUser,
    question: questions[id],
    author: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(UnansweredQuestions)
