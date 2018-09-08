import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
// Material-UI layout imports
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

class Unanswered extends Component {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleAnswerQuestion({
      authedUser: this.props.authedUser,
      qid: this.props.id,
      answer: this.state.answerQuestion
    }))
  }

  handleChange = event => {
    this.setState({ answerQuestion: event.target.value })
  }

  render() {
    const { question } = this.props

    return(
      <div>
        <Paper>
          <Avatar
            alt={`Avatar of ${this.props.author.name}`}
            src={this.props.author.avatarURL}
            className='avatar'
          />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
  return {
    authedUser: authedUser,
    question: questions[id],
    author: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(Unanswered)
