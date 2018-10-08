import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { handleAnswerQuestion } from '../actions/shared'

// Using Material-UI to help build the layout
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

class Question extends Component {

  render() {
    const { question, id } = this.props

    return (
      <Card>
        <div>
          <p className='p-text'>{question.optionOne.text}</p>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div>
          <p className='p-text'>{question.optionTwo.text}</p>
        </div>
        <div>
          <Link to={`/question/${id}`} className='login-btn'>View Poll</Link>
        </div>
      </Card>
    )
  }
}

function mapStateToProps({ questions, authedUser }, { id }) {
  return {
    question: questions[id],
    optionOneChosen: questions[id].optionOne.votes.indexOf(authedUser) > -1,
    optionTwoChosen: questions[id].optionTwo.votes.indexOf(authedUser) > -1
  }
}

export default connect(mapStateToProps)(Question)
