import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// Using Material-UI to help build the layout
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class Question extends Component {
  state = {
    value: 0
  }

  handleTabs = (event, value) => {
    this.setState({ value })
  }

  render() {

    return (
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
    )
  }
}

export default connect()(Question)
