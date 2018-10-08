import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import Question from './Question'
import QuestionPage from './QuestionPage'

class Dashboard extends Component {
  render() {
    return (
      <QuestionPage />
    )
  }
}

export default connect()(Dashboard)
