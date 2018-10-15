import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'

class LeaderBoard extends Component {
  render() {
    if (this.props.authedUser){
      let users = this.props.users
      return (
      <div>
        <h3 className='header'>Leaderboard</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='p-text' style={{ textAlign: 'center' }}>User</TableCell>
              <TableCell className='p-text' style={{ textAlign: 'center' }}>Questions Asked</TableCell>
              <TableCell className='p-text' style={{ textAlign: 'center' }}>Questions Answered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map(user => (
              <TableRow>
                <TableCell style={{ color: '#30CF83', textAlign: 'center' }}>
                  <Avatar
                    src={user.avatarURL}
                    alt={user.name}
                  />
                  {user.name}
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{user.questions.length}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{Object.keys(user.answers).length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      )
    }
    else {
      return <Redirect to='/login' />
    }
  }
}

function mapStateToProps({ users, authedUser }) {
  let userList = Object.keys(users).map(key => users[key])
  return {
    users: userList.sort((a, b) => { return userHistory(b) - userHistory(a)}),
    authedUser: authedUser
  }
}

function userHistory(user) {
  return user.questions.length + Object.keys(user.answers).length
}

export default connect(mapStateToProps)(LeaderBoard)
