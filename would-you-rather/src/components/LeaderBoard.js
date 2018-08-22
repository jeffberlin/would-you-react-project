import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3 className='center header'>Leader Board</h3>
      </div>
    )
  }
}

export default connect()(LeaderBoard)
