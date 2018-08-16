import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Questions</h3>
        <ul className='dashboard-list'>
          <li>
            <Question />
          </li>
        </ul>
      </div>
    )
  }
}

export default Dashboard
