import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  render() {
    const { question } = this.props

    const { name, avatar, text, id } = question

    return (
      <Link to={`/question/${id}`} className='question'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>
            <span>{name}</span>
            <p>{text}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Question
