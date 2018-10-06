import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
  render() {
    return (
      <div className='center'>
        <h2>Error 404</h2>
        <h4>Page Not Found</h4>
        {/* <Link to='/'>Home</Link> */}
      </div>
    )
  }
}

export default ErrorPage
