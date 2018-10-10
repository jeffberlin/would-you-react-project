import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Using Material-UI to help build the layout
import Card from '@material-ui/core/Card'

class Question extends Component {

  render() {
    const { question, id } = this.props

    return (
      <Card className='question-card'>
        <div>
          <h4 style={{ color: '#3a4b58' }}>Would You Rather...</h4>
        </div>
        <div>
          <p className='p-text'>{question.optionOne.text}</p>
        </div>
        <div>
          <h5 style={{ color: '#3a4b58' }}>OR</h5>
        </div>
        <div>
          <p className='p-text'>{question.optionTwo.text}</p>
        </div>
        <div>
          <Link to={`/question/${id}`} className='login-btn'>Cast Vote</Link>
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
