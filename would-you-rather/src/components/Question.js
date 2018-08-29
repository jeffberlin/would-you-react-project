import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// Using Material-UI to help build the layout
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'

class Question extends Component {
  state = {
    value: 0
  }

  handleTabs = (event, value) => {
    this.setState({ value })
  }

  answeredList = () => {
    return this.props.questions.filter(quest => (quest.optionOne.votes.includes(this.props.authedUser)||quest.optionTwo.votes.includes(this.props.authedUser)))
  }

  unansweredList = () => {
    return this.props.questions.filter(quest => !this.answeredList().includes(quest))
  }

  render() {

    let questionList = this.state.value === 'unanswered' ? this.unansweredList() : this.answeredList()
    if (!this.props.authedUser) {
      return(<Redirect to='/login' />)
    }
    else {
      return (
        <div>
          <Paper>
            <Tabs
              className='question-tab'
              value={this.state.value}
              onChange={this.handleTabs}
              centered
            >
              <Tab label="Unanswered Questions" />
              <Tab label="Answered Questions" />
            </Tabs>
          </Paper>
          <Paper>
            <List>

            </List>
          </Paper>
        </div>
      )
    }
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {questions: Object.keys(questions).map(key => questions[key]), authedUser}
}

export default connect(mapStateToProps)(Question)
