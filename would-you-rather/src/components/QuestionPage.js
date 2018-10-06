import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Question from './Question'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class QuestionPage extends Component {
  state = {
    answered: false
  }

  toggleAnswered = (e, answered) => {
    e.preventDefault()
    this.setState({
      answered
    })
  }

  render() {
    if (!this.props.authedUser) {
      return <Redirect to={{ pathname: '/login', state: { returnPath: '/'}}} />
    }
    return (
      <div className='center'>
        {this.state.answered === true ? <h3 className='header'>Answered Questions</h3> : <h3 className='header'>Unanswered Questions</h3>}
        <div>
          <Button
            onClick={(e) => this.toggleAnswered(e, false)}
          >
            Unanswered
          </Button>
          <Button
            onClick={(e) => this.toggleAnswered(e, true)}
          >
            Answered
          </Button>
          <ul>
            {this.state.answered ? this.props.answeredQid.map((id) => (
              <li key={id}><Question id={id} /></li>
            )) : this.props.unansweredQid.map((id) => (
              <li key={id}><Question id={id} /></li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    answeredQid: Object.keys(questions)
								.filter((question) => (questions[question].optionOne.votes.indexOf(authedUser) > -1) || (questions[question].optionTwo.votes.indexOf(authedUser) > -1))
								.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unansweredQid: Object.keys(questions)
								.filter((question) => (questions[question].optionOne.votes.indexOf(authedUser) === -1) && (questions[question].optionTwo.votes.indexOf(authedUser) === -1))
								.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)
