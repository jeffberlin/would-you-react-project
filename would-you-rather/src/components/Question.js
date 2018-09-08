import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Unanswered from './Unanswered'
import Answered from './Answered'

class Question extends Component {
  render() {
    const { question, answeredQuestion, authedUser } = this.props
    if (authedUser) {
      if (answeredQuestion) {
        return <Answered id={question.id} />
      } else {
        return <Unanswered id={question.id} />
      }
    }
    else {
      return <Redirect to='/login' />
    }
  }
}

function mapStateToProps({ questions, authedUser, users }, props) {
  const id = props.match.params.id
  const question = questions[id]
  const authedUsersAnswers = authedUser && Object.keys(users[authedUser].answers)
  const answeredQuestion = authedUser && authedUsersAnswers.includes(id)

  return {
    answeredQuestion,
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Question)
