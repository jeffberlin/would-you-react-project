import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pollPercentage } from '../utils/api.js'

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

class Answered extends Component {
  render() {
    const { question } = this.props
    let optionOnePoll = pollPercentage("optionOne", question)
    let optionTwoPoll = pollPercentage("optionTwo", question)
    return(
      <Paper>

      </Paper>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  return {
    authedUser: authedUser,
    question: questions[props.id],
    author: users[questions[props.id].author]
  }
}

export default connect(mapStateToProps)(Answered)
