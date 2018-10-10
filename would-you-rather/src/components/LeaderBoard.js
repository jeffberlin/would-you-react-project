import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'

class LeaderBoard extends Component {
  render() {
    if (!this.props.authedUser) {
      return <Redirect to={{ pathname: '/login', state: { returnPath: '/leaderboard'}}} />
    }
    return (
      <div className='center'>
        <h3 className='header'>Leaderboard</h3>        {this.props.users.map((user, index) => (
          <div key={user.id}>
            <Card className='card-style'>
              <CardHeader className='card-header-user'
                avatar = {
                  <Avatar
                    src={user.avatarURL}>
                  </Avatar>
                }
                title={user.name}
              />

              {/* <div key={user.id}> */}
              {/* <div>
                <Avatar
                  src={user.avatarURL}
                  alt="Avatar"
              /> */}
              {/* <h4 className='user-name'>{index + 1}. {user.name}</h4> */}
              {/* </div> */}
              <div>
                <p className='p-text'>Asked: {Object.keys(user.questions).length}</p>
              </div>
              <div>
                <p className='p-text'>Answered: {Object.keys(user.answers).length}</p>
              </div>
              {/* </div> */}
            </Card>
          </div>
        ))}
      </div>
        )
          }
          }

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.keys(users).sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length)).map((user) => users[user]),
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)
