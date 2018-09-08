import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Question from './Question'

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


class Dashboard extends Component {
  state = {
    value: 'unanswered'
  }

  handleTabs = (event, value) => {
    this.setState({ value })
  }

  answeredList = () => {
    return this.props.questions.filter(q => (q.optionOne.votes.includes(this.props.authedUser)||q.optionTwo.votes.includes(this.props.authedUser)))
  }

  unansweredList = () => {
    return this.props.questions.filter(q => !this.answeredList().includes(q))
  }

  render() {
    let questionList = this.state.value === "unanswered" ? this.unansweredList() : this.answeredList()

    if (!this.props.authedUser) {
      return(<Redirect to='/login' />)
    }
    else {
      return (
        <div>
          <h3 className='center header'>Questions</h3>
          <div className='center'>
            <Paper>
              <Tabs
                className='question-tab'
                value={this.state.value}
                onChange={this.handleTabs}
                centered
              >
                <Tab label="Unanswered Questions" value="unanswered" />
                <Tab label="Answered Questions" value="answered" />
              </Tabs>
            </Paper>
            <Paper>
              <List>
                {questionList && questionList.map(q => (
                  <ListItem key={q.id}>
                    <Paper>
                      <Link to={`/question/${q.id}`}>
                        <Typography className='center' variant="headline" component="h3">Would you rather</Typography>
                        <Typography component="p" className='margin'>
                          {q.optionOne.text}
                        </Typography>
                        <Typography component="p" className='margin'>
                          {q.optionTwo.text}
                        </Typography>
                      </Link>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {questions: Object.keys(questions).map(key => questions[key]), authedUser}
}

export default connect(mapStateToProps)(Dashboard)
