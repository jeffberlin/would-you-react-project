import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Question from './Question'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center header'>Questions</h3>
        <ul className='dashboard-list'>
          <li>
            <Question />
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(Dashboard)
