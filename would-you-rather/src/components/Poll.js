import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/shared'
import ErrorPage from './ErrorPage'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'

class Poll extends Component {

  handleVote = (e, authedUser, qid, answer) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleSaveAnswer(authedUser, qid, answer))
  }

  render() {

    const { id, question, optionOneChosen, optionOnePoll, optionTwoChosen, optionTwoPoll, authedUser, authorAvatar } = this.props

    if (!authedUser) {
      return <Redirect to={{ pathname: '/login', state: { returnPath: '/question/' + id}}} />
    }

    if (!question) {
      return (
        <ErrorPage />
      )
    }

    return (
      <div className='center'>
        <h2>Would You Rather</h2>
        <Card>
          <CardHeader
            avatar = {
              <Avatar
                src={authorAvatar}>
              </Avatar>
            }
            title={question.author}
          />
          {(optionOneChosen !== true && optionTwoChosen !== true) &&
            <div>
              <p>{question.optionOne.text}</p>
              <Button onClick={(e) => this.handleVote(e, id, 'optionOne')}>
                Vote
              </Button>
              <p>{question.optionTwo.text}</p>
              <Button onClick={(e) => this.handleVote(e, id, 'optionTwo')}>
                Vote
              </Button>
            </div>
          }
          {(optionOneChosen === true || optionTwoChosen === true) &&
            <div>
              <p>{question.optionOne.text}</p>
              <p>Vote Count: {question.optionOne.votes.length}</p>
              <p>Vote Percentage: {optionOnePoll}%</p>

              {optionOneChosen && <p>Your Selection</p>}

              <p>{question.optionTwo.text}</p>
              <p>Vote Count: {question.optionTwo.votes.length}</p>
              <p>Vote Percentage: {optionTwoPoll}%</p>

              {optionTwoChosen && <p>Your Selection</p>}

            </div>
          }
        </Card>
      </div>
    )

  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params

  return {
    id,
		authorAvatar: questions[id] ? users[questions[id].author].avatarURL : null,
		question: questions[id] ? questions[id] : null,
		optionOneChosen: questions[id] ? questions[id].optionOne.votes.indexOf(authedUser) > -1 : null,
		optionOnePoll: questions[id] ? (questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100 : null,
		optionTwoChosen: questions[id] ? questions[id].optionTwo.votes.indexOf(authedUser) > -1 : null,
		optionTwoPoll: questions[id] ? (questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100 : null,
		authedUser
  }
}

export default connect(mapStateToProps)(Poll)
