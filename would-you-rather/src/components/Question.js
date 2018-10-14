import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'

class Question extends Component {
  render() {
    const { question, hasAnswered, authedUser } = this.props
    if (authedUser) {
      if (hasAnswered) {
        return <AnsweredQuestions id={question.id} />
      } else {
        return <UnansweredQuestions id={question.id} />
      }
    }
    else {
      return <Redirect to='/login' />
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const id = props.match.params.id
  const question = questions[id]
  const answeredByAuthedUser = authedUser && Object.keys(users[authedUser].answers)
  const hasAnswered = authedUser && answeredByAuthedUser.includes(id)

  return {
    hasAnswered,
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Question)
