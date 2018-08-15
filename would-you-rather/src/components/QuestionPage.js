import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { id } = this.props
    return (
      <div>
        <Question id={id} />
        <NewQuestion id={id} />

        <ul>

          <li>
            <Question />
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users}, props) {
  const { id } = props.match.params

  return {
    id,
  }
}
export default QuestionPage
