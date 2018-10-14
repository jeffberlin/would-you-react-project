import React, {Component} from 'react'
import Nav from './Nav'

const ErrorPage = () => {
  return (
    <div>
      <Nav />
      <div className='center'>
        <h2 style={{ color: '#195a7c' }}>Page Not Found</h2>
      </div>
    </div>
  )
}

export default ErrorPage
