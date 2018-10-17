import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Home extends Component {
  state = {
    value: 'unanswered'
  }

  toggleTab = (event, value) => {
    this.setState({
      value
    })
  }

  getAnswered = () => {
    return this.props.questions.filter(q => (q.optionOne.votes.includes(this.props.authedUser) || q.optionTwo.votes.includes(this.props.authedUser)))
  }

  getUnanswered = () => {
    return this.props.questions.filter(q => !this.getAnswered().includes(q))
  }

  render() {
    // let questionList = this.state.value === 'unanswered' ? this.getUnanswered() : this.getAnswered()

    const questionList = this.state.value === 'unanswered' ? this.getUnanswered() : this.getAnswered()

    if (!this.props.authedUser) {
      return (<Redirect to='/login' />)
    }
    else {
      return (
        <div>
          <Paper>
            <Tabs
              value={this.state.value}
              onChange={this.toggleTab}
              centered
            >
              <Tab label='Answered' value='answered' />
              <Tab label='Unanswered' value='unanswered' />
            </Tabs>
          </Paper>
          <List>
            {questionList && questionList.map(q => (
              <ListItem key={q.id}>
                <Paper className='question-card'>
                  <div>
                    <h4 style={{ color: '#3a4b58', textAlign: 'center' }}>Would You Rather...
                    </h4>
                  </div>
                  <Link to={`/question/${q.id}`}>
                    <ListItemText className='question-card'>
                      <p className='p-text'>
                        {q.optionOne.text}</p>
                      <h5 style={{ color: '#3a4b58' }}>OR</h5>
                      <p className='p-text'>
                        {q.optionTwo.text}
                      </p>
                    </ListItemText>
                  </Link>
                </Paper>
              </ListItem>
            ))}
          </List>
        </div>
      )
    }
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions: Object.keys(questions).map(key => questions[key]),
    authedUser
  }
}

export default connect(mapStateToProps)(Home)
